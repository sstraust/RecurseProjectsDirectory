(ns rcprojectsdir.manage-projects)

(defn get-users-projects
  "HTTP handler: return projects for current user-id"
  [request]
  (let [user-id  (:db_id (:session request))
        users-projects (jdbc/query db-spec
                             ["SELECT name, description, author, created_at FROM projects WHERE author = ?" user-id])]
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (json/write-str {:users-projects users-projects})}))

(defn get-all-projects
  "HTTP handler: return all projects"
  [_request]
  (let [all-projects (jdbc/query db-spec
                             ["SELECT name, description, author, created_at FROM projects"])]
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (json/write-str {:all-projects all-projects})}))

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

