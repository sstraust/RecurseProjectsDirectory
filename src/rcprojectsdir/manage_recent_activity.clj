(ns rcprojectsdir.manage-recent-activity
  (:require
   [clojure.java.jdbc :as jdbc]
   [compojure.core :refer [defroutes GET]]
   [easyreagentserver.core :as er-server]
   [rcprojectsdir.database :refer [db-spec]]))

(defn get-recent-activity
  "HTTP handler: return all recent activity"
  {:malli/schema (er-server/param-schema {})}
  [_request]
  (let [recent-activity (jdbc/query db-spec
                                 ["
SELECT
  'project' AS event_type,
  p.id AS project_id,
  p.name AS project_name,
  p.description AS project_description,
  u.name AS author_name,
  p.created_at AS activity_at,
  NULL AS update_text
FROM projects p
LEFT JOIN users u ON p.author = u.id

UNION ALL

SELECT
  'update' AS event_type,
  p.id AS project_id,
  p.name AS project_name,
  NULL AS project_description,
  u.name AS author_name,
  pu.created_at AS activity_at,
  pu.update_text AS update_text
FROM project_updates pu
JOIN users u ON pu.author = u.id
JOIN projects p ON pu.project_id = p.id

ORDER BY activity_at DESC
LIMIT 50"])]
    (er-server/json-response {:recent-activity recent-activity})))

(defroutes manage-recent-activity-routes
  (GET "/getRecentActivity" params (get-recent-activity params)))
