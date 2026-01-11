(ns rcprojectsdir.get-main-page
  (:require [hiccup.page :refer [html5 include-css include-js]]
            [easyreagentserver.core :as er-server]
            [rcprojectsdir.database :as database :refer [db-spec]]
            [clojure.java.jdbc :as jdbc]
            [clojure.data.json :as json]))


(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (str "<script>mode=" (json/write-str @er-server/MODE) "</script>")
   (include-css (str "/resources/global_output.css?v=" (rand-int 100000)))])

(defn is-new-user [params]
  (:is_new_user (first (jdbc/query db-spec ["SELECT is_new_user FROM users WHERE id = ?" (:db_id (:session params))]))))


;; now I need to pass the user session parameter to landing-page
(defn loading-page [params]
  (html5
   (head)
   [:body {:class "body-container"}
    [:div {:id "main-app"}]
    (str "

<link href=\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap\" rel=\"stylesheet\">")
    (include-js "/resources/reload_css.js")
    (include-js "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js")
    (str "<script>is_new_user=" (is-new-user params) "</script>")
    (if (= @er-server/MODE :dev)
      (include-js  (str "/out/main.js?v=" (rand-int 100000)))
      (include-js "/out/main.js"))]))

(defn get-main-page [params]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page params)})

