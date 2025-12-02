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


(defn create-project-field [content* label-name placeholder]
  [:<>
    [:label.font-semibold.my-4
     label-name]
    [:input.w-full.input.input-bordered
     {:type "text"
      :value       @content*
      :on-change   #(reset! content* (.. % -target -value))
      :placeholder placeholder}]])


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
  [:div.w-screen.h-screen.bg-base-200
   [:div.hero
   [:div.heroed-content.mt-10
  [:v-box.items-center.card.shadow-lg.bg-base-100.pb-10
   {:style
    {:font-family "Raleway"
     :width "39.375rem"
     ;; :height "44.5rem"
     }}
   [:h1.font-bold.m-10 {:style {:font-size "2.185rem"}}
    title-text]

   [:v-box.items-center.w-full
    [:v-box.self-stretch
     {:style {:padding-left "2.5rem"
              :padding-right "2.5rem"}}

   [create-project-field (r/cursor project-details-atom [:name]) "Name" ;; "NewProject_11-25-25"
    "MyCoolProject"]
   [:div {:style {:height 28}}  " "]
   [create-project-field (r/cursor project-details-atom [:description]) "Description" "Catch up on your friends projects"]
   [:div {:style {:height 28}}  " "]
   [create-project-field (r/cursor project-details-atom [:link]) "Link" "github.com/name/thisproject"]
     
     [:div {:style {:height 28}}  " "]     
     [:div.w-full
      [:div "+ Add Additional Info"]]

     [:h-box.items-center.self-end.gap-3

      ;; now you just need to add these routes
      ;; which set the is new user value
      [:button.btn.btn-outline
       {:on-click skip-submitted}
       "Skip"]
      [:button.btn.btn-primary
       {:on-click (create-project-fn project-details-atom)}
       "Create"]]]]]]]])))



(defn load-new-project-view-first-user []
  (rdom/render [create-your-first-project {:title-text "Create Your First Project"}]
               (js/document.getElementById "main-app")))

(defn load-new-project-view []
  (rdom/render [create-your-first-project {:title-text "Tell RC about Your Project"}]
               (js/document.getElementById "main-app")))
