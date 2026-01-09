(ns rcprojectsdir.manage-projects
  (:require
   [clojure.data.json :as json]
   [clojure.java.io :as io]
   [clojure.java.jdbc :as jdbc]
   [clojure.string :as str]
   [compojure.core :refer [defroutes GET POST]]
   [easyreagentserver.core :as er-server]
   [rcprojectsdir.database :as database :refer [db-spec]]
   [rcprojectsdir.manage-project-updates :as manage-project-updates]
   [rcprojectsdir.oauth :as oauth]))


(defn get-users-projects
  "HTTP handler: return projects for current user-id + last_update_at"
  {:malli/schema (er-server/param-schema {})}
  [request]
  (let [user-id  (:db_id (:session request))
        users-projects (jdbc/query db-spec
                                   ["
SELECT
  p.id,
  p.name,
  p.description,
  p.author AS author_id,
  p.created_at,
  u.name AS author_name,
  MAX(pu.created_at) AS last_update_at
FROM projects p
LEFT JOIN users u ON p.author = u.id
LEFT JOIN project_updates pu ON pu.project_id = p.id
WHERE p.author = ?
GROUP BY p.id, p.name, p.description, p.author, p.created_at, u.name
ORDER BY COALESCE(MAX(pu.created_at), p.created_at) DESC
" user-id])]
    (er-server/json-response {:users-projects users-projects})))


(defn get-all-projects
  "HTTP handler: return all projects + last_update_at"
  {:malli/schema (er-server/param-schema {})}
  [_request]
  (let [all-projects (jdbc/query db-spec
                                 ["
SELECT
  p.id,
  p.name,
  p.description,
  p.author AS author_id,
  p.created_at,
  u.name AS author_name,
  MAX(pu.created_at) AS last_update_at
FROM projects p
LEFT JOIN users u ON p.author = u.id
LEFT JOIN project_updates pu ON pu.project_id = p.id
GROUP BY p.id, p.name, p.description, p.author, p.created_at, u.name
ORDER BY COALESCE(MAX(pu.created_at), p.created_at) DESC"])]
    (er-server/json-response {:all-projects all-projects})))


;; manage images
(def images-dir "resources/user_images")
(defn save-image-to-project
  [project-id {:keys [filename tempfile]}]
  (let [;; Generate unique filename to avoid collisions
        unique-name (str (java.util.UUID/randomUUID))
        dest-path   (str images-dir "/" unique-name)
        dest-file   (io/file dest-path)]
    (io/make-parents dest-file)
    (io/copy tempfile dest-file)
    (jdbc/insert! db-spec :project_images
                  {:project_id project-id
                   :file_path  dest-path})))

(defn save-project-images [project-id images]
  (doseq [image images]
    (save-image-to-project project-id image)))


(defn get-image-paths-for-project
  "HTTP handler: return image records for a project"
  {:malli/schema (er-server/param-schema {:project-id :string})}
  [{{:keys [project-id]} :params}]
  (er-server/json-response
   {:images (jdbc/query db-spec
                        ["SELECT id, file_path FROM project_images WHERE project_id = ?"
                         (Integer/parseInt project-id)])}))

(defn serve-project-image
  "Serve an image file by its database ID"
  {:malli/schema (er-server/param-schema {:image-id :string})}
  [{{:keys [image-id]} :params}]
  (if-let [{:keys [file_path]} 
           (first (jdbc/query db-spec
                              ["SELECT file_path FROM project_images WHERE id = ?"
                               (Integer/parseInt image-id)]))]
    (let [file (io/file file_path)]
      (if (.exists file)
        {:status 200
         :headers {"Content-Type" "application/octet-stream"}
         :body (io/input-stream file)}
        {:status 404
         :headers {"Content-Type" "text/plain"}
         :body "Image file not found"}))
    {:status 404
     :headers {"Content-Type" "text/plain"}
     :body "Image record not found"}))



(defn vec->pg-array [conn type-name coll]
  (.createArrayOf (jdbc/get-connection conn) type-name (into-array coll)))

(defn create-project!
  "Create a new project row for the given user id."
  [user-id project-name description links images is-live]
  (let [insert-result (jdbc/insert!
                       db-spec
                       :projects
                       {:name project-name
                        :description description
                        :project_links (vec->pg-array db-spec "TEXT" links)
                        :author user-id
                        :is_live (or is-live false)})]
    (save-project-images (:id (first insert-result)) images)
    insert-result))


;; TODO add malli schema for this route
(defn create-project [{{:keys [project-description project-name project-links images is-live]} :params :as request}]
  (let [is-live             (if (= is-live "true") true false)
        ;; TODO -- in testing this, I noticed an issue where the string value passed in the project-links request is not what I expect it to be
        links               (if (string? project-links) [project-links] project-links) ; workaorund for a bug where array args are automatically coalesced
        user-id             (:db_id (:session request))
        images              (if (map? images) [images] images)] ; workaorund for a bug where array args are automatically coalesced
    (try
      (if (and (string? project-description)
               (string? project-name)
               (not (clojure.string/blank? project-name)))
        (if-let [result (first (create-project! user-id project-name project-description links images is-live))]
          (do (manage-project-updates/create-update
               {:params {:project-id (str (:id result))
                         :update-contents (str "New project created: " project-description)
                         :event-type-contents "project"}
                :session (:session request)})
              (oauth/mark-new-user-form-as-completed request)
              (er-server/json-response {:ok true
                                        :project-id (:id result)}))
          (er-server/failure-response "failed to create project"))
        (er-server/failure-response "invalid project name or description"))
      (catch Exception e
        (println e)
        (er-server/failure-response "Failed to create project")))))


(defn pgarray->vec
  "Converts a PostgreSQL array to a Clojure vector"
  [pg-array]
  (when pg-array
    (vec (.getArray pg-array))))

;; use keyword destructuring to access params
(defn get-project-details
  {:malli/schema (er-server/param-schema {:project-id :string})}
  [{{:keys [project-id]} :params :as request}]
  (let [query-result (first
                      (jdbc/query
                       db-spec
                       ["SELECT p.name, p.description, p.author AS author_id, p.project_links, p.is_live,
                            u.name AS author_name FROM projects p
                         LEFT OUTER JOIN users u
                         ON p.author = u.id
                         WHERE p.id = ? LIMIT 1"
                        (Integer/parseInt project-id)]))]
    (if query-result
      (er-server/json-response
       (-> query-result
           (update :project_links pgarray->vec)
           (assoc :owned_by_me? (= (:author query-result)
                                   (:db_id (:session request))))))
      (er-server/failure-response "Failed to Fetch Project"))))




;; NOTE -- this function is from an old version of the code
;; and isn't fully complete
(defn edit-project [{{:keys [project-id updates]} :params :as params}]
  (let [edit-result (jdbc/execute!
                     db-spec
                     ["UPDATE projects
                       SET
                         name = COALESCE(?, name),
                         description = COALESCE(?, description),
                         is_live = COALESCE(?, is_live),
                         project_links = COALESCE(?, project_links)

                       WHERE id = ?
                       RETURNING name, description, author AS author_id;"
                      (:name updates)
                      (:description updates)
                      (:is_live updates)
                      (vec->pg-array db-spec "TEXT" (or (remove clojure.string/blank? (:project_links updates))
                                                        []))
                      (Integer/parseInt project-id)])]
    (if edit-result
      (er-server/json-response (first edit-result))
      (er-server/failure-response "Failed to Edit Project"))))

;; (edit-project bb)



(defn search-remove-special-chars
  [input]
  (-> (or input "")
      (str/replace #"[&|!():*<>']" " ")  ; remove operators
      str/trim))

(defn str-to-search-query
  [input]
  (->> (str/split (search-remove-special-chars input) #"\s+")
       (remove str/blank?)
       (map #(str % ":*"))
       (str/join " & ")))


;; TODO add malli validation so we can ensure that this matches the same
;; schema as getallprojects
(defn search-projects
  {:malli/schema (er-server/param-schema {:search-str :string})}
  [{{:keys [search-str]} :params}]
  (er-server/json-response
   {:all-projects 
   (let [search-query (str-to-search-query search-str)]
    (when-not (str/blank? search-query)
      (jdbc/query db-spec
        ["SELECT id, name, description,
                 ts_rank(search_vector, to_tsquery('simple', ?)) AS rank
          FROM project_search
          WHERE search_vector @@ to_tsquery('simple', ?)
          ORDER BY rank DESC
          LIMIT ?"
         search-query search-query 100])))}))


;; TODO add context path to routes, e.g. '/manageProjects/getProjectdetails'
(defroutes manage-project-routes
  (GET "/getProjectDetails" params (get-project-details params))
  (POST "/editProject" params (edit-project params))
  (GET "/getUsersProjects" params (get-users-projects params))  
  (GET "/getAllProjects" params (get-all-projects params))
  (POST "/newProject" params (create-project params))
  (POST "/searchProjects" params (search-projects params))
  (GET "/getProjectImages" params (get-image-paths-for-project params))
  (GET "/projectImage/:image-id" params (serve-project-image params)))
