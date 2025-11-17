(ns rcprojectsdir.core
  (:require [reagent.dom :as rdom]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [easyreagent.components :as er]
            [reagent.core :as r]))

(defn load-main-page []
  (rdom/render [:div "Hi from reagent"]
               (js/document.getElementById "main-app")))

(defn ^:export load-page []
  (case (js* "window.location.pathname")
    "/" (load-main-page)))

  
(load-page)


(def curr-css (atom nil))

(defn reload-stylesheets []
  (cljs.core.async.macros/go
    (let [output (:body (<! (http/get (str "resources/global_output.css?v=" (rand-int 1000000)))))]
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
