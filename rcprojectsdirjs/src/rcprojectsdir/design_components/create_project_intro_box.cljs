(ns rcprojectsdir.design-components.create-project-intro-box)

(defn create-project-field [label-name value placeholder]
  [:<>
    [:label.font-semibold.my-4
     label-name]
    [:input.w-full.input.input-bordered
     {:type "text"
      :placeholder placeholder
      :value value}]])


(defn create-your-first-project []
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
    "Create Your First Project"]

   [:v-box.items-center.w-full
    [:v-box.self-stretch
     {:style {:padding-left "2.5rem"
              :padding-right "2.5rem"}}

   [create-project-field "Name" "NewProject_11-25-25" ""]
   [:div {:style {:height 28}}  " "]
   [create-project-field "Description" "" "Catch up on your friends projects"]
   [:div {:style {:height 28}}  " "]
   [create-project-field "Link" "" "github.com/name/thisproject"]
     
     [:div {:style {:height 28}}  " "]     
     [:div.w-full
      [:div "+ Add Additional Info"]]

     [:h-box.items-center.self-end.gap-3
      [:button.btn.btn-outline "Skip"]
      [:button.btn.btn-primary "Create"]]]]]]]])

