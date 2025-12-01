(ns rcprojectsdir.feed.updates-feed
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [easyreagent.components]
            [rcprojectsdir.common-components.navbar :as navbar]
            [easyreagent.components :as er]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn get-users-projects [updates-list*]
  (go
    (let [resp   (:body (<! (http/get "/getUpdatesList")))]
      (if (not resp)
        (js/alert "failed to fetch updates feed")
        (reset! updates-list* (:updates-list resp))))))

(defn display-update [update]
  [:div  (:update_text update)])

(defn updates-feed []
  (let [updates-list* (r/atom nil)]
    (get-users-projects updates-list*)
    (fn []
      [:v-box
       (for [update @updates-list*]
         [display-update update])])))
