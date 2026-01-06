(ns rcprojectsdir.feed.updates-feed
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [easyreagent.components]
   [rcprojectsdir.feed.projects-feed :as projects-feed]
   [rcprojectsdir.feed.my-projects :as my-projects]
   [reagent.core :as r])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn get-updates-list [updates-list*]
  (go
    (let [resp   (:body (<! (http/get "/getUpdatesList")))]
      (if (not resp)
        (js/alert "failed to fetch updates feed")
        (do
          (reset! updates-list* (:updates-list resp)))))))
          (reset! updates-list* (:updates-list resp))

(def one-month-ms
  (* 30 24 60 60 1000))

(defn within-last-month? [iso-date-string]
  (let [now (.getTime (js/Date.))
        then (.getTime (js/Date. iso-date-string))]
    (< (- now then) one-month-ms)))

(defn display-update [update]
  [:v-box.bg-base-100.rounded-xl {:style {:margin-left "1.875rem"
                                          :margin-right "1.875rem"}}
   [:h-box.justify-between.items-center
    {:style {:margin-right "1.875rem"}}
    [:v-box
     {:style {:margin-top "1.5rem"
              :margin-left "1.875rem"}}
     [:h2.font-bold
      
      {:style {:font-size "2.1875rem"}}
      (:project_name update)]
     [:h-box
      [:div.rounded-full
       {:style
        {:width "2.0625rem"
         :height "2.0625rem"
         :background-color "#9B9B9B"
         :margin-right "0.625rem"}}
       "."]
      [:a.link.text-link-color {:style {:font-size "1.5625rem"}}
       (:author_name update)]]]

    (cond 
      (and (= (:event_type update) "project") (within-last-month? (:created_at update))) 
          [:div.badge.bg-badge-primary.font-semibold.px-5
            {:style {:height "2.688rem"
                      :background-color "#8BDD7E"
                      :font-size "1.25rem"}}
            "New"]
      (and (= (:event_type update) "update") (within-last-month? (:created_at update))) 
          [:div.badge.bg-badge-primary.font-semibold.px-5
            {:style {:height "2.688rem"
                      :background-color "#86CEFF"
                      :font-size "1.25rem"}}
            "Updated"]
      :else nil)]
   [:h-box.justify-between.w-full
    [:div.font-normal
    {:style {:margin-left "3.438rem"
             :padding-bottom "1.875rem"
             :margin-top "1.875rem"
             :font-size "1.563rem"}}

      (if (= (:event_type update) "project")
        (:project_description update)
        (:update_text update))]
    ;; [:div.self-end.font-bold.underline
    ;;  {:style {:padding-bottom "1.875rem"
    ;;           :padding-right "1.875rem"
    ;;           :font-size "1.5rem"
    ;;           }}
    ;;  "View →"]
     ]
    ])



(defn choose-menu-button [menu-name menu-id currently-selected-menu*]
  [:h1.font-bold.h-16.cursor-pointer
   {:style (merge {:margin-top "1.875rem"
                   
                   :font-size "1.5625rem"}
                  (if (not (= menu-id @currently-selected-menu*))
                    {:height "2.5625rem"}
                    {:height "2.75rem"}
                    ))
    :class (if (= menu-id @currently-selected-menu*)
             "border-b border-base-content border-b-4"
             "border-b border-base-content border-b-1")
    :on-click #(reset! currently-selected-menu* menu-id)}
   menu-name])

(defn choose-menu-spacer []
  [:div {:style {:padding-left "1.438rem"
                 :margin-top "1.875rem"
                 :height "2.5625rem"
                 }
         :class "border-b border-base-content border-b-1"} ""])
  
  


(defn updates-feed []
  (let [updates-list* (r/atom nil)
        selected-menu* (r/atom ::recent-activity)]
    (get-updates-list updates-list*)
    (fn []
      [:<>
       [:h-box
        {:style {:margin-bottom "0.625rem"}}
        [choose-menu-button  "Recent Activity" ::recent-activity selected-menu*]
        [choose-menu-spacer]
        [choose-menu-button  "All Projects" ::all-projects selected-menu*]
        [choose-menu-spacer]
        [choose-menu-button  "My Projects" ::users-projects selected-menu*]]
       [:v-box.flex-grow.rounded-xl
        {:style {:padding-top "1.875rem"
                 :padding-bottom "1.875rem"
                 :background-color "#F0F0F0"}}
       (cond
         (= @selected-menu* ::recent-activity)
         [:v-box
          {:style {:gap "2rem"}}
          (for [update @updates-list*]
            ^{:key (str (:event_type update) "-" (:created_at update) "-" (:update_id update) "-" (hash (:update_text update)))}
            [display-update update])]
         (= @selected-menu* ::all-projects)
         [projects-feed/projects-feed]
         (= @selected-menu* ::users-projects)
         [my-projects/my-projects])]])))
