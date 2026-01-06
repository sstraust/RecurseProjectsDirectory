(ns rcprojectsdir.manage-project-updates
  (:require
   [malli.instrument :as mi]
   [clojure.data.json :as json]
   [clojure.java.jdbc :as jdbc]
   [easyreagentserver.core :as er-server]
   [rcprojectsdir.database :as database :refer [db-spec]]
   [compojure.core :refer [defroutes GET POST]]))


(defn create-update
  {:malli/schema (er-server/param-schema {:project-id :string
                                          :update-contents :string
                                          :event-type-contents :string})}
  [{{:keys [project-id update-contents event-type-contents]} :params :as params}]
  (if-not (first (jdbc/query db-spec ["SELECT 1 FROM projects WHERE author = ? AND id = ? LIMIT 1"
                                      (:db_id (:session params)) (Integer/parseInt project-id)]))
    (er-server/failure-response "Failed to find this project owned by user")
    (if-let [db-result (jdbc/insert!
                        db-spec
                        :project_updates
                        {:update_text (str update-contents)
                         :project_id (Integer/parseInt project-id)
                         :author (:db_id (:session params))
                         :event_type (str event-type-contents)})]
      (er-server/json-response {:ok true
                                :update-id (:id db-result)})
      (er-server/failure-response "Failed to insert"))))


(defn get-updates-list
  {:malli/schema (er-server/param-schema {})}
  [params]
  (er-server/json-response
   {:updates-list (jdbc/query
              db-spec
              ["
SELECT
  u.id AS update_id, 
  u.update_text AS update_text,
  a.name AS author_name,
  b.name AS project_name,
  u.created_at AS created_at,
  u.event_type AS event_type,
  b.description AS project_description
FROM project_updates u
JOIN users a
ON u.author = a.id
JOIN projects b
ON u.project_id = b.id
ORDER BY u.created_at DESC"])}))

(defroutes manage-project-updates-routes
  (POST "/createUpdate" params (create-update params))
  (GET "/getUpdatesList" params (get-updates-list params)))


(mi/collect! {:ns ['rcprojectsdir.manage-project-updates]})
(mi/instrument!)
