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


(defn fetch-project-images [project-id images-atom loading-atom error-atom]
  (reset! loading-atom true)
  (reset! error-atom nil)
  (go
    (let [result (<! (http/get "/getProjectImages"
                               {:query-params {:project-id project-id}}))]
      (if (= (:status result) 200)
        (reset! images-atom (:images (:body result)))
        (reset! error-atom "Failed to load images"))
      (reset! loading-atom false))))


(defn image-modal
  "DaisyUI modal for fullscreen image view"
  [selected-image-atom]
  [:dialog.modal
   {:class (when @selected-image-atom "modal-open")
    :on-click #(reset! selected-image-atom nil)}
   [:div.modal-box.max-w-5xl.max-h-full.p-2.bg-base-300
    {:on-click #(.stopPropagation %)}
    [:form {:method "dialog"}
     [:button.btn.btn-sm.btn-circle.btn-ghost.absolute.right-2.top-2
      {:on-click #(reset! selected-image-atom nil)}
      "✕"]]
    (when @selected-image-atom
      [:img.w-full.h-auto.rounded-lg
       {:src (str "/projectImage/" @selected-image-atom)
        :alt "Full size image"}])]
   [:form.modal-backdrop {:method "dialog"}
    [:button {:on-click #(reset! selected-image-atom nil)} "close"]]])

(defn project-images
  "Reagent component to display all images for a project."
  [project-id]
  (let [images         (r/atom [])
        loading?       (r/atom true)
        error          (r/atom nil)
        selected-image (r/atom nil)]
    (fetch-project-images project-id images loading? error)
    (fn [_]
      [:div.w-full
       [image-modal selected-image]
       (cond
         @loading?
         [:div.flex.justify-center.items-center.p-8
          [:span.loading.loading-spinner.loading-lg]]

         @error
         [:div.alert.alert-error
          [:span @error]]

         (empty? @images)
         nil

         :else
         [:div.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-3.gap-4
          (for [{:keys [id]} @images]
            ^{:key id}
            [:div.card.bg-base-200.shadow-md.cursor-pointer.hover:shadow-lg.transition-shadow
             {:on-click #(reset! selected-image id)}
             [:figure.p-2
              [:img.rounded-lg.w-full.h-auto.max-h-64.object-contain
               {:src (str "/projectImage/" id)
                :alt (str "Project image " id)
                :loading "lazy"}]]])])])))



(defn fetch-project-updates [project-id updates-atom loading-atom error-atom]
  (reset! loading-atom true)
  (reset! error-atom nil)
  (go
    (let [result (<! (http/get "/getUpdatesForProject"
                               {:query-params {:project-id project-id}}))]
      (if (= (:status result) 200)
        (reset! updates-atom (:updates (:body result)))
        (reset! error-atom "Failed to load updates"))
      (reset! loading-atom false))))

(defn format-date [date-str]
  (when date-str
    (-> date-str js/Date. (.toLocaleDateString "en-GB"))))

(defn update-card [{:keys [update_text created_at]}]
  [:div.card.bg-base-200.shadow-sm {:style {:margin-bottom "1rem"}}
   [:div.card-body.flex-row.justify-between
    [:v-box
     [:div {:style {:font-weight 600
                    :font-size "0.875rem"
                    :margin-bottom "0.5rem"}}
      (format-date created_at)]
     [:div update_text]]]])

(defn project-updates-list [project-id]
  (let [updates  (r/atom [])
        loading? (r/atom true)
        error    (r/atom nil)]
    (fetch-project-updates project-id updates loading? error)
    (fn [_]
      [:div.card.bg-base-100.shadow {:style {:margin-top "2rem"
                                             :padding "1.5rem"}}
       [:h2 {:style {:font-weight 700
                     :font-size "1.25rem"
                     :margin-bottom "1rem"}}
        "Updates"]
       (cond
         @loading?
         [:div.flex.justify-center
          [:span.loading.loading-spinner]]

         @error
         [:div.alert.alert-error
          [:span @error]]

         (empty? @updates)
         [:div.opacity-60 "No updates yet"]

         :else
         [:div {:style {:max-height "30vh"
                        :overflow "scroll"}}
         (for [{:keys [id] :as update} @updates]
           ^{:key id}
           [update-card update])])])))




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
   [:v-box.flex-grow.pb-16
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
    [project-images (get-project-id)]
    (for [link (:project_links @project-details-atom)]
      [:h-box
       [:a.link.text-link-color {:href link :target "_blank"
                                 :style {:margin-right "1.875rem"}}
        link]
       [:h-box.items-center
        [:div {:style {:margin-right "0.625rem"}}
         "Live"]
        [:input {:type "checkbox"
                 :disabled true
                 :class "checkbox disabled:opacity-60 disabled:cursor-default"
                 :checked (:is_live @project-details-atom)}]]])
    
    [project-updates-list (get-project-id)]
    ]

   [:v-box.h-full.justify-between
    [:div "Placeholder for Badges"]
    (when (:owned_by_me? @project-details-atom)
      [:button.btn.self-end.mt-4
       {:on-click #(set! (.-href js/window.location)
                         (str "/editProject?project=" (get-project-id)))}
        "Edit"])]])

(defn view-project-page []
  (let [project-details-atom (r/atom {})]
    (def zz project-details-atom)
    (fetch-current-project-details project-details-atom)
    (fn []
      [:v-box.w-screen.w-screen.items-center.h-screen
       [navbar/full-navbar]
       [project-details project-details-atom]])))

(defn load-view-project-page []
  (rdom/render [view-project-page]
               (js/document.getElementById "main-app")))
