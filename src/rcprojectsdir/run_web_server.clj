(ns rcprojectsdir.run-web-server
  (:require [compojure.core :refer [defroutes GET POST]]
            [easyreagentserver.core :as er-server]
            [hiccup.page :refer [include-js include-css html5]]
            [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]))

(def db-spec
  {:dbtype "postgresql"
   :dbname "rcprojectsdir"
   :host "localhost"
   :port 5432
   :user "myuser"
   :password "mypass"})

(comment 
(jdbc/execute!
 db-spec
 ["CREATE TABLE IF NOT EXISTS test_table (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL)"])


(jdbc/execute!
 db-spec
 ["INSERT INTO  test_table (id, description) VALUES (?, ?)" 12 "hi"])

(jdbc/query
 db-spec
 ["SELECT * FROM test_table"])

)


               




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

(defn create-project [params]
  (let [project-description (:project-description (:params params))]
    (println (str "the value is: " project-description))))


(defroutes routes
  (GET "/" params (get-main-page params))
  (POST "/newProject" params (create-project params)))

(defn run-web-server [input-mode]
  (when input-mode (reset! er-server/MODE input-mode))
  (er-server/run-web-server
   "rcprojectsdirjs" routes
   {:port 8001
    :join? false
    :headerBufferSize 1048576}))


;; (run-web-server :dev)


;; (create-project {:params {:project-description "hello"}})
