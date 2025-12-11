(ns rcprojectsdir.run-web-server
  (:require
   [clojure.data.json :as json]
   [clojure.java.io :as io]
   [clojure.java.jdbc :as jdbc]
   [clojure.string :as str]
   [compojure.core :refer [defroutes GET POST]]
   [easyreagentserver.core :as er-server]
   [libpython-clj2.python :as py]
   [rcprojectsdir.database :as database :refer [db-spec]]
   [rcprojectsdir.get-main-page :as get-main-page]
   [rcprojectsdir.oauth :as oauth]
   [ring.util.response :as response]))


(defn new-user-form-completed [params]
  (jdbc/execute!
   db-spec
   ["UPDATE users
     SET is_new_user = false
     WHERE id = ?;"
    (:db_id (:session params))]))

(defn get-users-projects
  "HTTP handler: return projects for current user-id"
  [request]
  (let [user-id  (:db_id (:session request))
        users-projects (jdbc/query db-spec
                             ["SELECT id, name, description, author, created_at FROM projects WHERE author = ?" user-id])]
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (json/write-str {:users-projects users-projects})}))
;; 

(defn get-all-projects
  "HTTP handler: return all projects"
  [_request]
  (let [all-projects (jdbc/query db-spec
                             ["SELECT id, name, description, author, created_at FROM projects"])]
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (json/write-str {:all-projects all-projects})}))

(declare create-update)


(def images-dir "resources/user_images/")
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


(defn create-project!
  "Create a new project row for the given user id."
  [user-id project-name description links images]
  (let [insert-result (jdbc/insert!
                       db-spec
                       :projects
                       {:name project-name
                        :description description
                        :project_links links
                        :author user-id})]
    (save-project-images (:id (first insert-result)) images)
    insert-result))


            

(defn vec->pg-array [conn type-name coll]
  (.createArrayOf (jdbc/get-connection conn) type-name (into-array coll)))

(defn create-project [request]
  (def z3 request)
  (let [project-description (get-in request [:params :project-description])
        project-name        (get-in request [:params :project-name])
        links               (vec->pg-array
                             db-spec "TEXT"
                             (rest (get-in request [:params :project-links])))
        user-id             (:db_id (:session request))
        images              (if (map? (:images (:params request)))
                              [(:images (:params request))]
                              (:images (:params request)))]
    (try
      (if (and (string? project-description)
                (string? project-name)
                (not (clojure.string/blank? project-name)))
        (if-let [result (first (create-project! user-id project-name project-description links images))]
          (do (create-update {:params {:project-id (str (:id result))
                                       :update-contents (str "New project created: " project-description)}})
              (new-user-form-completed request)
              {:status  200
               :headers {"Content-Type" "application/json"}
               :body    (json/write-str {:ok true
                                         :project-id (:id result)})})
          (do (println "failed to create project")
          {:status  500
           :headers  {"Content-Type" "text/plain"}
           :body    "failed to create project"}))
        (do
          (println "invalid project name")
          {:status  500
        :headers  {"Content-Type" "text/plain"}
         :body    "invalid project name"}))
      (catch Exception e
        (println e)
        {:status  500
        :headers  {"Content-Type" "text/plain"}
         :body    "Failed to create project"}))))
;; (:params z3)



;; use keyword destructuring to access params
(defn get-project-details [{{:keys [project-id]} :params}]
  (let [query-result (first
                      (jdbc/query
                       db-spec
                       ["SELECT name, description, author FROM projects WHERE id = ? LIMIT 1"
                        (Integer/parseInt project-id)]))]
    (if query-result 
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/write-str query-result)}
      {:status 500
       :headers {"Content-Type" "text/plain"}
       :body "Failed to Fetch Project"})))



(defn edit-project [{{:keys [project-id updates]} :params}]
  (let [edit-result (jdbc/execute!
                     db-spec
                     ["UPDATE projects
                       SET
                         name = COALESCE(?, name),
                         description = COALESCE(?, description)
                       WHERE id = ?
                       RETURNING name, description, author;"
                      (:name updates)
                      (:description updates)
                      (Integer/parseInt project-id)])]
    (if edit-result
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/write-str (first edit-result))}
      {:status 500
       :headers {"Content-Type" "text/plain"}
       :body "Failed to Edit Project"})))

(defn create-update [{{:keys [project-id update-contents]} :params :as params}]
  (def zz params)
  (if-not (= (:status (get-project-details params)) 200)
    (get-project-details params)
    (if-not (first (jdbc/query db-spec ["SELECT 1 FROM projects WHERE author = ? AND id = ? LIMIT 1"
                               (:db_id (:session params)) (Integer/parseInt project-id)]))
      {:status 500
       :headers {"Content-Type" "text/plain"}
       :body "Failed to find this project owned by user"}
      (if-let [db-result (jdbc/insert!
                       db-spec
                       :project_updates
                       {:update_text (str update-contents)
                        :project_id (Integer/parseInt project-id)
                        :author (:db_id (:session params))})]
        {:status 200
         :headers {"Content-Type" "application/json"}
         :body    (json/write-str {:ok true
                                   :update-id (:id db-result)})}
        {:status 500
         :headers {"Content-Type" "text/plain"}
         :body "Failed to insert"}))))

(comment

  (:params zz)
  {:update-contents "testhi11", :project-id ""}

  )



(defn get-updates-list [params]
  (er-server/json-response
   {:updates-list (jdbc/query
              db-spec
              ["SELECT update_text, a.name AS author_name, b.name AS project_name,u.created_at
     FROM project_updates u
     JOIN users a
     ON u.author = a.id
     JOIN projects b
     ON u.project_id = b.id"])}))



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
(defn search-projects [{{:keys [search-str]} :params}]
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





   

  

(defn get-curr-user-info [params]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/write-str (select-keys (:session params) [:id :name]))})

(defn login-redirect [handler]
  (fn [request]
    (if (get-in request [:session :recurse_id])
      (handler request)
      (response/redirect "/redirect"))))




(defroutes private-routes
  ;; now I think this should return is_new_user as part of the js response
  ;; so that it happens clean on first load with no flashbang
  (GET "/" params (get-main-page/get-main-page params))
  (GET "/currUserInfo" params (get-curr-user-info params))
  ;; use frontend routing for requests
  (GET "/reviewProjectPage" params (get-main-page/get-main-page params))
  (GET "/getProjectDetails" params (get-project-details params))
  (POST "/editProject" params (edit-project params))
  (GET "/getUsersProjects" params (get-users-projects params))  
  (GET "/getAllProjects" params (get-all-projects params))
  (POST "/newProject" params (create-project params))
  (POST "/createUpdate" params (create-update params))
  (GET "/getUpdatesList" params (get-updates-list params))
  (POST "/searchProjects" params (search-projects params))
  (POST "/newProjectPageSkip" params (new-user-form-completed params))
  )
  


(def all-routes
  (compojure.core/routes
   oauth/public-routes
   (compojure.core/wrap-routes
    private-routes
    login-redirect)))
  

(defn run-web-server [input-mode]
  (when input-mode (reset! er-server/MODE input-mode))
  (when (= input-mode :dev)
    (py/py. os/environ __setitem__ "OAUTHLIB_INSECURE_TRANSPORT" "1"))
  (database/database-migrations)
  (er-server/run-web-server
   "rcprojectsdirjs" all-routes
   {:port 8001
    :join? false
    :headerBufferSize 1048576}))


;; (run-web-server :dev)




;; (jdbc/query db-spec ["SELECT * FROM updates"])({:id 1, :update_text "test", :project_id 22, :author 17, :created_at #inst "2025-11-25T19:00:07.041901000-00:00"} {:id 2, :update_text "test update", :project_id 22, :author 17, :created_at #inst "2025-11-25T19:00:42.687783000-00:00"} {:id 3, :update_text "test", :project_id 34, :author 17, :created_at #inst "2025-11-25T19:14:25.544164000-00:00"} {:id 4, :update_text "my test update!!", :project_id 26, :author 17, :created_at #inst "2025-11-25T19:18:07.494845000-00:00"})


