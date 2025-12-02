(ns rcprojectsdir.common-components.navbar
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [rcprojectsdir.pages.new-project-page :as new-project-page]
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
      [:div (first (first (clojure.string/split (or (:name @user-details-atom) "") #" ")))])))


(defn full-navbar []
  [:div.navbar.bg-base-300.w-full
    [:div.flex-1
     [:div.font-bold "RC Projects Directory"]]
    [:div
     [:button.btn.btn-outline.h-10
      {:style {:min-height "min-content"}
       :on-click new-project-page/load-new-project-view}
      "+ New Project"]
     [:div.avatar
      [:v-box.w-10.h-10.mx-3.rounded-full.bg-base-200.justify-center.items-center
       [user-details]]]]])
