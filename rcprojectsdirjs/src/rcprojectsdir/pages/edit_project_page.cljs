(ns rcprojectsdir.pages.edit-project-page
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [rcprojectsdir.pages.new-project-page :as new-project-page]
   [rcprojectsdir.pages.view-project-page :as view-project-page]
   [easyreagent.components :as er]
   [reagent.core :as r]
   [reagent.dom :as rdom])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn save-updated-project [project-details-atom]
  (go
    (when @project-details-atom
      (let [result (<! (http/post "/editProject"
                                  {:json-params
                                   {:project-id (view-project-page/get-project-id)
                                    :updates @project-details-atom}}))]
        (if (= (:status result) 200)
          (set! (.-href js/window.location)
                           (str "/viewProject?project=" (view-project-page/get-project-id)))
          (js/alert "failed to save!"))))))

(defn delete-project [project-details-atom]
  (go
    (.log js/console "the things: ")
    (.log js/console @project-details-atom)
    (.log js/console (view-project-page/get-project-id))
    (when @project-details-atom
      (let [result (<! (http/delete 
                                  (str "/deleteProject/"
                                  (view-project-page/get-project-id))))]
        (.log js/console result)
        (if (= (:status result) 200)
          (set! (.-href js/window.location)
                           (str "/"))
          (js/alert "failed to delete!"))))))


(defn edit-project-page []
  (let [project-details-atom (r/atom [])]
    (view-project-page/fetch-current-project-details project-details-atom)
    (def debugging-variable project-details-atom)
    (fn []
      [:div.hero.mt-24
      [:v-box.max-w-5xl
       [new-project-page/create-project-field (r/cursor project-details-atom [:name]) "Name" ;; "NewProject_11-25-25"
            "MyCoolProject"
        "(Defaults to today’s date- you can change this later)"]
       [new-project-page/create-project-field-description (r/cursor project-details-atom [:description]) "Description" "Starting to work on a new app..."
        "(Can just be one line)"]

       [new-project-page/create-project-field-link
        (r/cursor project-details-atom [:project_links 0])
        (r/cursor project-details-atom [:is_live])
        "Link" "github.com/name/thisproject"
        "(Optional)"]

       [:div "Currently you cannot edit project screenshots. this feature is coming soon"]

       [:h-box.w-full.justify-between.mt-6
        [:button.btn.btn-error.mt-4
          ;; call the delete function and also set the url back to the dashboard
          {:on-click #(delete-project project-details-atom)}
          "Delete"]
        [:h-box.w-full.justify-end
          [:button.btn.btn-outline.mt-4.mx-4
          {:on-click #(set! (.-href js/window.location)
                            (str "/viewProject?project=" (view-project-page/get-project-id)))}
          "Cancel"]
          [:button.btn.btn-primary.mt-4
          {:on-click #(save-updated-project project-details-atom)}
          "Save"]]]]])))


(defn load-edit-project-page []
  (rdom/render [edit-project-page]
               (js/document.getElementById "main-app")))
