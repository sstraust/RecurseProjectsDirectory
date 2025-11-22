(ns rcprojectsdir.common-components.navbar
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [reagent.core :as r])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn get-user-details [user-details-atom]
  (go
    (let [result (<! (http/get "/currUserInfo" {}))]
      (if (= (:status result) 200)
        (reset! user-details-atom (:body result))
        (js/alert "failed to fetch user")))))

(defn user-details []
  (let [user-details-atom (r/atom nil)]
    (get-user-details user-details-atom)
    (fn []
      [:div (first (clojure.string/split (or (:name @user-details-atom) "") #" "))])))


(defn full-navbar []
  [:div.navbar.text-xl
   [:div "RC Projects"]
   [:h-box.flex-grow.justify-end.text-xs.text-accent.items-start [user-details]]])
