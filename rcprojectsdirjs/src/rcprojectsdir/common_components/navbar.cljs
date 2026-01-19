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
  [:h-box.bg-base-300.w-full.items-center
   {:style {:background-color "#D9D9D9"
            :min-height "6.125rem"}}
    [:div.flex-1
     [:a.font-bold.cursor-pointer
      {:style {:margin-left "2.5rem"
               :font-size "1.25rem"}
       :href "/"}
      "RC Projects Directory"]]
   [:h-box.h-full.items-center
    {:style
     {:padding-top "0.9375rem"
      :padding-bottom "0.9375rem"}}
     [:button.btn.btn-outline.h-full.normal-case
      {:style {:min-height "min-content"
               :padding-left "1.875rem"
               :padding-right "1.875rem"
               :max-height "none"
               :font-size "1.5rem"
               :background-color "#353535"
               :color "#E6E6E6"}
       :on-click new-project-page/load-new-project-view}
      "+ New Project"]
     [:div.avatar
      [:v-box.w-10.h-10.mx-3.rounded-full.bg-base-200.justify-center.items-center.font-bold
       {:style {:background-color "#9B9B9B"
                :font-size "2.5rem"
                :height "4.25rem"
                :width "4.25rem"}}
       [user-details]]]]])
