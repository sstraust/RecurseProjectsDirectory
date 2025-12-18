(ns rcprojectsdir.run-web-server
  (:require
   [compojure.core :refer [defroutes GET]]
   [easyreagentserver.core :as er-server]
   [libpython-clj2.python :as py]
   [rcprojectsdir.database :as database]
   [rcprojectsdir.get-main-page :as get-main-page]
   [rcprojectsdir.manage-project-updates :as manage-project-updates]
   [rcprojectsdir.manage-projects :as manage-projects]
   [rcprojectsdir.oauth :as oauth]))







(defroutes private-routes
  ;; now I think this should return is_new_user as part of the js response
  ;; so that it happens clean on first load with no flashbang
  (GET "/" params (get-main-page/get-main-page params))
  ;; use frontend routing for requests
  (GET "/reviewProjectPage" params (get-main-page/get-main-page params))
  
  oauth/oauth-private-routes
  manage-projects/manage-project-routes
  manage-project-updates/manage-project-updates-routes)
  


(def all-routes
  (compojure.core/routes
   oauth/public-routes
   (compojure.core/wrap-routes
    private-routes
    oauth/login-redirect)))
  

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


