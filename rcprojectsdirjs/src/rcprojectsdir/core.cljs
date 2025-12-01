(ns rcprojectsdir.core
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [rcprojectsdir.pages.home-page :as home-page]
   [reagent.core :as r]
   [rcprojectsdir.pages.review-project-page :as review-project-page]
   [rcprojectsdir.design-components.main-homepage]
   [rcprojectsdir.design-components.create-project-intro-box]
   [reagent.dom :as rdom]))



(defn load-main-page []
  (rdom/render [home-page/home-page]
               (js/document.getElementById "main-app")))

(defn ^:export load-page []
  (case (js* "window.location.pathname")
    "/" (load-main-page)
    "/reviewProjectPage" (review-project-page/load-review-project-page)))

  
(load-page)





;; (rdom/render [rcprojectsdir.design-components.main-homepage/test-ui]
;;              (js/document.getElementById "main-app"))


(def curr-css (atom nil))

(defn reload-stylesheets []
  (cljs.core.async.macros/go
    (let [output (:body (<! (http/get (str "/resources/global_output.css?v=" (rand-int 1000000)))))]
      (when (not (= @curr-css output))
        (js/reloadStylesheets))
      (reset! curr-css output))))

(defn reload-css []
  (js/setInterval
   (fn [] (reload-stylesheets)) 500))

(js/setTimeout (fn []
                 (when (= js/mode "dev")
                   (reload-css)))
               3000)
