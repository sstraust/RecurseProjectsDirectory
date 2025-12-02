(ns rcprojectsdir.feed.updates-feed
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [easyreagent.components]
   [rcprojectsdir.feed.projects-feed :as projects-feed]
   [reagent.core :as r])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn get-users-projects [updates-list*]
  (go
    (let [resp   (:body (<! (http/get "/getUpdatesList")))]
      (if (not resp)
        (js/alert "failed to fetch updates feed")
        (reset! updates-list* (:updates-list resp))))))

(defn display-update [update]
  [:v-box.bg-base-100.rounded-xl {:style {:margin-left "1.563rem"
                                          :margin-right "1.813rem"}}
   [:h-box.justify-between.items-center
    {:style {:margin-right "1.875rem"}}
    [:v-box
     {:style {:margin-top "1.5rem"
              :margin-left "1.1825rem"}}
     [:h2.font-bold
      {:style {:font-size "2.1875rem"}}
      (:project_name update)]
     [:a.link.text-link-color {:style {:font-size "1.5625rem"}}
      (:author_name update)]]
    [:div.badge.bg-badge-primary.font-semibold.px-5
     {:style {:height "2.688rem"
              :font-size "1.25rem"}}
     "Updated Today"]]
   [:div.font-normal
    {:style {:margin-left "3.438rem"
             :padding-bottom "3.125rem"
             :margin-top "2.063rem"
             :font-size "1.563rem"}}
    (:update_text update)]])

(defn updates-feed []
  (let [updates-list* (r/atom nil)
        updates-selected (r/atom false)]
    (get-users-projects updates-list*)
    (fn []
      [:v-box.bg-base-200.flex-grow.mt-9.rounded-xl
       [:h-box
        [:h1.font-bold.h-16.cursor-pointer
         {:style {:margin-top "1.875rem"
                  :font-size "1.563rem"
                  :margin-left "1.438rem"}
          :class (when (not @updates-selected) "underline")
          :on-click #(reset! updates-selected false)}
         "Projects"]

        [:h1.font-bold.h-16.cursor-pointer
         {:style {:margin-top "1.875rem"
                  :font-size "1.563rem"
                  :margin-left "1.438rem"}
          :class (when @updates-selected "underline")
          :on-click #(reset! updates-selected true)}
         "Updates"]]
       (cond
         @updates-selected
         [:v-box
          {:style {:gap "3.875rem"}}
          (for [update @updates-list*]
            [display-update update])]
         :else
         [projects-feed/projects-feed])])))
