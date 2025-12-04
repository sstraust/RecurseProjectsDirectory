(ns rcprojectsdir.pages.new-project-page 
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [reagent.core :as r]
   [reagent.dom :as rdom])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn skip-submitted []
  (go
    (let [result (<! (http/post "/newProjectPageSkip"
                                {}))]
      (if (= (:status result) 200)
        (.reload js/location)
        (js/alert "Failed to Submit")))))


(defn create-project-field [content* label-name placeholder subtext]
  [:<>
   [:label.font-semibold
    {:style {:font-size "1.25rem"
             :height "3.3125rem"
             :margin-bottom "0.625rem"}}
     label-name]
    [:input.w-full.input.input-bordered
     {:type "text"
      :style {:font-size "1.25rem"}
      :value       @content*
      :on-change   #(reset! content* (.. % -target -value))
      :placeholder placeholder}]
   [:p.font-medium
    {:style
     {:height "0.875rem"
      :color "#717171"
      :font-size "0.75rem"
      :margin-top "0.625rem"}}
    subtext]
   ])


(defn create-project-field-description [content* label-name placeholder subtext]
  [:<>
   [:label.font-semibold
    {:style {:font-size "1.25rem"
             :margin-bottom "0.625rem"}}
    label-name]
   [:textarea.w-full.textarea.textarea-bordered
    {:style {:width "41.0625rem"
             :height "14.5625rem"
             :font-size "1.25rem"
             :font-weight 400
             :max-width "none"
             :max-height "none"}
     :value       @content*
     :on-change   #(reset! content* (.. % -target -value))
     :placeholder placeholder}]
   [:p.font-medium
    {:style
     {:height "0.875rem"
      :color "#717171"
      :font-size "0.75rem"
      :margin-top "0.625rem"}}
    subtext]
   ])

(defn create-project-field-link [content* label-name placeholder subtext]
  [:<>
   [:label.font-semibold
    {:style {:font-size "1.25rem"
             :margin-bottom "0.625rem"}}
    label-name]
   [:h-box.items-center
    [:input.input.input-bordered.flex-grow
     {:type "text"
      :style {:font-size "1.25rem"
              :height "3.3125rem"}
      :value       @content*
      :on-change   #(reset! content* (.. % -target -value))
      :placeholder placeholder}]
    [:h-box.items-center
     {:style {:min-width "6.9375rem"
              :font-size "1.25rem"
              :margin-left "1.875rem"}}
     [:label {:style {:white-space "nowrap"
                      :color "#353535"}}
      "Is it Live?"]
     [:input.checkbox {:type "checkbox"
                       :style {:margin-left "0.5625rem"}
                       }]]]
   
   [:p.font-medium
    {:style
     {:height "0.875rem"
      :color "#717171"
      :font-size "0.75rem"
      :margin-top "0.625rem"}}
    subtext]
   ])

(defn create-project-screenshots-mockup [content* label-name placeholder subtext]
  [:<>
   [:label.font-semibold
    {:style {:font-size "1.25rem"
             :margin-bottom "0.625rem"}}
    label-name]
   [:h-box.items-center
    [:input.input.input-bordered.flex-grow
     {:type "text"
      :style {:font-size "1.25rem"
              :height "3.3125rem"
              }
      :value       @content*
      :on-change   #(reset! content* (.. % -target -value))
      :placeholder placeholder}]
    [:button.normal-case.font-bold.border.border-1.rounded-xl
     {:style {:margin-left  "1.875rem"
              :min-width "9.125rem"
              :min-height "3.3125rem"
              :font-size "1.5rem"
              :line-height "100%"}}
     "Browse"]]
   
   [:p.font-medium
    {:style
     {:height "0.875rem"
      :color "#717171"
      :font-size "0.75rem"
      :margin-top "0.625rem"
      }}
    subtext]
   ])


(defn create-project-fn [project-details-atom]
  (fn [e]
    (.preventDefault e)
    (def aa {:form-params {:project-name (:name @project-details-atom)
                   :project-description (:description @project-details-atom)}})
  (go
    (let [result (<! (http/post "/newProject"
                                {:form-params {:project-name (:name @project-details-atom)
                                               :project-description (:description @project-details-atom)}}))
          status (:status result)
          body   (some-> (:body result)
                         (js->clj :keywordize-keys true))]
      (if (= status 200)
        (do
          (set! (.-href (.-location js/window)) "/"
                ;; (str "/reviewProjectPage?project=" (:project-id (:body result)))
                ))
        (do
          (.error js/console "Failed to create project" (clj->js result))
          (js/alert (or (:error body) "Something went wrong creating your project."))))))))




(defn create-your-first-project [{:keys [title-text]}]
  (let [project-details-atom (r/atom {})]
    (fn []
  [:div.w-screen.h-screen
   [:div.hero
   [:div.heroed-content.mt-10
  [:v-box.items-center.bg-base-100.pb-10
   {:style
    {:font-family "Raleway"
     :min-width "41.0625rem"
     :width "41.0625rem"
     ;; :height "44.5rem"
     }}
   [:h1.font-bold.mt-10.w-full
    {:style {:font-size "1.875rem"
             :height "2.1875rem"
             :line-height "100%"}}
    title-text]
   [:p.w-full
    {:style {:font-size "1.25rem"}}
    "If not, you can skip to go straight into the app. You can always add a project later."]

   [:v-box.items-center.w-full
    [:v-box.self-stretch
     ;; {:style {:padding-left "2.5rem"
     ;;          :padding-right "2.5rem"}}

     [:div {:style {:height "2.5rem"}} " "]
     [create-project-field (r/cursor project-details-atom [:name]) "Name" ;; "NewProject_11-25-25"
      "MyCoolProject"
      "(Defaults to today’s date- you can change this later)"
      ]
     [:div {:style {:height "1.875rem"}}  " "]
     [create-project-field-description (r/cursor project-details-atom [:description]) "Description" "Starting to work on a new app..."
      "(Can just be one line)"]
     [:div {:style {:height "1.875rem"}}  " "]
     [create-project-field-link (r/cursor project-details-atom [:links]) "Link" "github.com/name/thisproject"
      "(Optional)"]
     [:div {:style {:height "1.875rem"}}  " "]
     [create-project-screenshots-mockup (r/cursor project-details-atom [:screenshots]) "Screenshots" "Drag and drop or \"Browse\" to upload"
      "(Optional)"]
     
     [:div {:style {:height 28}}  " "]     
     ;; [:div.w-full
     ;;  [:div "+ Add Additional Info"]]

     [:h-box.items-center.self-end.gap-3

      ;; now you just need to add these routes
      ;; which set the is new user value
      [:button.btn.btn-outline.normal-case.rounded-xl
       {:on-click skip-submitted
        :style {:width "6.875rem"
                :max-width "none"
                :font-size "1.5rem"
                :height "4.25rem"}}
       "Skip"]
      [:button.btn.btn-primary.normal-case.rounded-xl
       {:on-click (create-project-fn project-details-atom)
        :style {:width "8.625rem"
                :max-width "none"
                :font-size "1.5rem"
                :height "4.25rem"}}
       "Create"]]]]]]]])))



(defn load-new-project-view-first-user []
  (rdom/render [create-your-first-project {:title-text "Do you have a project you'd like to add?"}]
               (js/document.getElementById "main-app")))

(defn load-new-project-view []
  (rdom/render [create-your-first-project {:title-text "Tell RC about Your Project"}]
               (js/document.getElementById "main-app")))
