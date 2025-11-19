(ns rcprojectsdir.run-web-server
  (:require [compojure.core :refer [defroutes GET POST]]
            [easyreagentserver.core :as er-server]
            [hiccup.page :refer [include-js include-css html5]]
            [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]
            [environ.core :refer [env]]))

(def db-spec
  {:dbtype "postgresql"
   :dbname (env :postgres-db "rcprojectsdir")
   :host (env :postgres-host "localhost")
   :port (env :postgres-port 5432)
   :user (env :postgres-user "myuser")
   :password (env :postgres-password "mypass")})

(comment 
(jdbc/execute!
 db-spec
 ["CREATE TABLE IF NOT EXISTS test_table (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL)"]))

(defn migrate-v1 []
  (jdbc/execute!
    db-spec
    ["CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        author INTEGER NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        FOREIGN KEY (author) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS project_updates (
        id SERIAL PRIMARY KEY,
        project_id INTEGER NOT NULL,
        description TEXT NOT NULL,
        author INTEGER NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        FOREIGN KEY (project_id) REFERENCES projects(id),
        FOREIGN KEY (author) REFERENCES users(id)
      );"]))


#_(jdbc/execute!
 db-spec
 ["INSERT INTO  test_table (id, description) VALUES (?, ?)" 12 "hi"])

#_(jdbc/query
 db-spec
 ["SELECT * FROM test_table"])



               




(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (str "<script>mode=" (json/write-str @er-server/MODE) "</script>")
   (include-css (str "/resources/global_output.css?v=" (rand-int 100000)))])

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    [:div {:id "main-app"}]
    (include-js "/resources/reload_css.js")
    (include-js "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js")
    (if (= @er-server/MODE :dev)
      (include-js  (str "/out/main.js?v=" (rand-int 100000)))
      (include-js "/prod_js/main.js"))]))

(defn get-main-page [params]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})

(defn create-project!
  "Create a new project row for the given user id."
  [user-id name description]
  (jdbc/execute!
    db-spec
    ["INSERT INTO projects (name, description, author)
      VALUES (?, ?, ?)"
     name description user-id]))

(defn create-project [params]
  (let [project-description (get-in params [:params :project-description])
        ;; TODO: replace with logged-in user id
        user-id 1
        name    "New project"]
    (when (string? project-description)
      (create-project! user-id name project-description))
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (json/write-str {:ok true})}))

(defroutes routes
  (GET "/" params (get-main-page params))
  (POST "/newProject" params (create-project params)))

(defn run-web-server [input-mode]
  (when input-mode (reset! er-server/MODE input-mode))
  (migrate-v1)
  (er-server/run-web-server
   "rcprojectsdirjs" routes
   {:port 8001
    :join? false
    :headerBufferSize 1048576}))


;; (run-web-server :dev)


;; (create-project {:params {:project-description "hello"}})
