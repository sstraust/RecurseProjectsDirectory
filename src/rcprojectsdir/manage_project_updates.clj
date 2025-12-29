(ns rcprojectsdir.manage-project-updates
  (:require
   [clojure.data.json :as json]
   [clojure.java.jdbc :as jdbc]
   [easyreagentserver.core :as er-server]
   [rcprojectsdir.database :as database :refer [db-spec]]
   [compojure.core :refer [defroutes GET POST]]))


(defn create-update [{{:keys [project-id update-contents]} :params :as params}]
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
       :body "Failed to insert"})))


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


(defroutes manage-project-updates-routes
  (POST "/createUpdate" params (create-update params))
  (GET "/getUpdatesList" params (get-updates-list params)))



