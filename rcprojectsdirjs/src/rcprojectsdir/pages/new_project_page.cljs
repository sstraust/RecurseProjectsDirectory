(ns rcprojectsdir.pages.new-project-page 
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [clojure.string :as str]
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

(defn create-project-field-link [content* is-it-live* label-name placeholder subtext]
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
                       :checked @is-it-live*
                       :on-change #(reset! is-it-live* (-> % .-target .-checked))
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

(defn upload-image [images-map-cursor* label-name placeholder subtext]
  (let [images (r/cursor images-map-cursor* [:image-data])
        preview-urls (r/cursor images-map-cursor* [:preview-urls])
        file-input-ref (atom nil)
        dragging? (r/atom false)
        
        handle-files (fn [files]
                       (let [image-files (filter #(-> % .-type (.startsWith "image/")) files)
                             new-urls (mapv #(.createObjectURL js/URL %) image-files)]
                         (swap! images into image-files)
                         (swap! preview-urls into new-urls)))]
    (fn []
      [:<>
       [:label.font-semibold
        {:style {:font-size "1.25rem"
                 :margin-bottom "0.625rem"}}
        label-name]
       
       ;; Drop zone wrapper
       [:div {:class (str "relative " (when @dragging? "ring-2 ring-primary ring-offset-2 rounded-lg"))
              :on-drag-over (fn [e]
                              (.preventDefault e)
                              (.stopPropagation e))
              :on-drag-enter (fn [e]
                               (.preventDefault e)
                               (.stopPropagation e)
                               (reset! dragging? true))
              :on-drag-leave (fn [e]
                               (.preventDefault e)
                               (.stopPropagation e)
                               ;; Only set false if leaving the container entirely
                               (when (not (.contains (.-currentTarget e) (.-relatedTarget e)))
                                 (reset! dragging? false)))
              :on-drop (fn [e]
                         (.preventDefault e)
                         (.stopPropagation e)
                         (reset! dragging? false)
                         (let [files (-> e .-dataTransfer .-files array-seq)]
                           (handle-files files)))}
        
        [:input {:type "file"
                 :ref #(reset! file-input-ref %)
                 :class "hidden"
                 :multiple true
                 :accept "image/*"
                 :on-change (fn [e]
                              (let [files (-> e .-target .-files array-seq)]
                                (handle-files files)
                                (set! (.-value (.-target e)) "")))}]
        
        [:h-box.items-center
         [:input.input.input-bordered.flex-grow
          {:type "text"
           :style {:font-size "1.25rem"
                   :height "3.3125rem"}
           :value (if (seq @images)
                    (str (count @images) " file(s) selected")
                    "")
           :read-only true
           :placeholder placeholder}]
         [:button.normal-case.font-bold.border.border-1.rounded-xl
          {:type "button"
           :style {:margin-left "1.875rem"
                   :min-width "9.125rem"
                   :min-height "3.3125rem"
                   :font-size "1.5rem"
                   :line-height "100%"}
           :on-click #(when @file-input-ref (.click @file-input-ref))}
          "Browse"]]
        
        ;; Drag overlay indicator
        (when @dragging?
          [:div {:class "absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center pointer-events-none"}
           [:span {:class "text-primary font-semibold"} "Drop images here"]])]
       
       (if (not (seq @images))
         [:p.font-medium
          {:style {:height "0.875rem"
                   :color "#717171"
                   :font-size "0.75rem"
                   :margin-top "0.625rem"}}
          subtext]
         [:div {:class "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"}
          (for [[idx url] (map-indexed vector @preview-urls)]
            ^{:key url}
            [:div {:class "relative group"}
             [:img {:src url
                    :class "w-full h-32 object-cover rounded-lg"}]
             [:button {:type "button"
                       :class "btn btn-circle btn-error btn-xs absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                       :on-click (fn []
                                   (.revokeObjectURL js/URL url)
                                   (swap! images #(vec (concat (take idx %) (drop (inc idx) %))))
                                   (swap! preview-urls #(vec (concat (take idx %) (drop (inc idx) %)))))}
              "✕"]])])])))

(defn create-project-fn [project-details*]
  (fn [e] 
  (let [fd (js/FormData.)]
    (when (:title @project-details*) (.append fd "project-name" (:title @project-details*)))
    (when (:description @project-details*) (.append fd "project-description" (:description @project-details*)))
    (.append fd "is-live" (:is-live @project-details*))
    (doseq [img (:image-data (:images @project-details*))]
                                   (.append fd "images" img (.-name img)))
    (doseq [link (when (not (str/blank? (:link @project-details*)))
                   [(:link @project-details*)])]
      (.append fd "project-links" link))
    

    (-> (js/fetch "/newProject"
                  #js {:method "POST"
                       :body fd})
        (.then (fn [response]
                 (if (.-ok response)
                   response
                   (do (.then (.json response) #(js/alert (js/JSON.stringify %))) nil))))
        (.then #(and % (.json %)))
        (.then #(and % (set! (.-href (.-location js/window)) "/")))
        (.catch #(js/alert  (str "Something went wrong creating your project: " %)))))))

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
     [create-project-field (r/cursor project-details-atom [:title]) "Name" ;; "NewProject_11-25-25"
      "MyCoolProject"
      "(Defaults to today’s date- you can change this later)"
      ]
     [:div {:style {:height "1.875rem"}}  " "]
     [create-project-field-description (r/cursor project-details-atom [:description]) "Description" "Starting to work on a new app..."
      "(Can just be one line)"]
     [:div {:style {:height "1.875rem"}}  " "]
     [create-project-field-link
      (r/cursor project-details-atom [:link])
      (r/cursor project-details-atom [:is-live])
      "Link" "github.com/name/thisproject"
      "(Optional)"]
     [:div {:style {:height "1.875rem"}}  " "]
     [upload-image (r/cursor project-details-atom [:images])
      "Screenshots" "Drag and drop or \"Browse\" to upload"
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
