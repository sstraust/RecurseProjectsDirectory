(ns rcprojectsdir.core
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [rcprojectsdir.pages.edit-project-page :as edit-project-page]
   [rcprojectsdir.pages.home-page :as home-page]
   [rcprojectsdir.pages.new-project-page :as new-project-page]
   [rcprojectsdir.pages.view-project-page :as view-project-page]
   [reagent.dom :as rdom]))



(defn load-main-page []
  (rdom/render [home-page/home-page]
               (js/document.getElementById "main-app")))

(defn ^:export load-page []
  (case (js* "window.location.pathname")
    "/" (if js/is_new_user
          (new-project-page/load-new-project-view-first-user)
          (load-main-page))
    "/viewProject" (view-project-page/load-view-project-page)
    "/editProject" (edit-project-page/load-edit-project-page)))

  
(load-page)



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
