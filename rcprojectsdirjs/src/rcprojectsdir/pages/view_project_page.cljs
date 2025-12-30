(ns rcprojectsdir.pages.view-project-page
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [rcprojectsdir.common-components.navbar :as navbar]
   [rcprojectsdir.feed.projects-feed :as projects-feed]
   [reagent.core :as r]
   [reagent.dom :as rdom])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn get-project-id []
  (.get (js/URLSearchParams. (.-search (.-location js/window))) "project"))


(defn fetch-current-project-details [project-details-atom]
  (go
    (let [result (<! (http/get "/getProjectDetails"
                               {:query-params {:project-id (get-project-id)}}))]
      (if (= (:status result) 200)
        (reset! project-details-atom (:body result))
        (js/alert "failed to fetch project details")))))


;; this is copy-pasted from projects-feed
;; because it has slightly different spacing
(defn author-box [author_name]
  [:h-box.items-center
   [:div.rounded-full
    {:style
     {:width "2.0625rem"
      :height "2.0625rem"
      :background-color "#9B9B9B"
      :border "1px solid #353535"
      :margin-right "0.625rem"}}
    "."]
   [:a.link.text-link-color {:style {:font-size "1.5625rem"
                                     :font-weight 600}}
    author_name]])

(defn project-details [project-details-atom]
  [:h-box.justify-between {:style {:width "62.5rem"
                                   :margin-top "3.75rem"}}
   [:v-box
    [:h1 {:style {:font-weight 700
                  :font-size "1.875rem"
                  :line-height "100%"
                  :margin-bottom "0.625rem"}}
     (:name @project-details-atom)]
    [:div {:style {:margin-bottom "1.875rem"}}
     [author-box (:author_name @project-details-atom)]]
    [:div {:style {:font-size "1.25rem"
                   :font-weight 400
                   :margin-bottom "0.6875rem"}}
     (:description @project-details-atom)]
    (for [link (:project_links @project-details-atom)]
      [:h-box
       [:a.link.text-link-color {:href link :target "_blank"
                                 :style {:margin-right "1.875rem"}}
        link]
       [:h-box.items-center
        [:div {:style {:margin-right "0.625rem"}}
         "Live"]
        [:input {:type "checkbox"}]]])]

   [:v-box [:div "Placeholder for Badges"]]

   ])

(defn view-project-page []
  (let [project-details-atom (r/atom {})]
    (fetch-current-project-details project-details-atom)
    (fn []
      [:v-box.w-screen.w-screen.items-center.h-screen
       [navbar/full-navbar]
       [project-details project-details-atom]])))

(defn load-view-project-page []
  (rdom/render [view-project-page]
               (js/document.getElementById "main-app")))
