(ns rcprojectsdir.run-web-server
  (:require [compojure.core :refer [defroutes GET POST]]
            [easyreagentserver.core :as er-server]
            [hiccup.page :refer [include-js include-css html5]]
            [clojure.data.json :as json]))


(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (str "<script>mode=" (json/write-str @er-server/MODE) "</script>")
   (include-css "/resources/global_output.css")])

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    [:div {:id "main-app"}]
    (include-js "/resources/reload_css.js")
    (include-js "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js")
    (if (= @er-server/MODE :dev)
      (include-js "/out/main.js")
      (include-js "/prod_js/main.js"))]))

(defn get-main-page [params]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})


(defroutes routes
  (GET "/" params (get-main-page params)))

(defn run-web-server [input-mode]
  (when input-mode (reset! er-server/MODE input-mode))
  (er-server/run-web-server
   "rcprojectsdirjs" routes
   {:port 8005
    :join? false
    :headerBufferSize 1048576}))


;; (run-web-server :dev)
