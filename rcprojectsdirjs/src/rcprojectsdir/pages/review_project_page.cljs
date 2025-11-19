(ns rcprojectsdir.pages.review-project-page
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [reagent.core :as r]
   [easyreagent.components :as er]
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




(defn project-details-view [project-details-atom]
  [:form.flex.flex-col.mx-6.my-12
   {:on-submit (fn [e]
                 (.preventDefault e)
                 (go
                   (when @project-details-atom
                     (let [result (<! (http/post "/editProject"
                                                 {:json-params {:project-id (get-project-id)
                                                                :updates @project-details-atom}}))]
                       (if (= (:status result) 200)
                         (.reload js/location)
                         (js/alert "failed to save!"))))))}
   [:h-box.self-stretch.items-center.text-2xl
    [:label.mr-2 "Title: "]
    [er/text-field
     {:class "text-2xl h-9"}
     (r/cursor project-details-atom [:name])]]
   [:v-box.my-6.self-stretch.text-xl
    [:label "Description"]
    [:div.mr-20.ml-8.mt-2
    [er/text-area
     {:class "h-24 !max-w-none"}
     (r/cursor project-details-atom [:description])]]]
   [:button.btn.btn-primary.self-end {:type "submit"} "Submit Edits"]])



(defn review-project-page []
  (let [project-details-atom (r/atom {})]
    (fetch-current-project-details project-details-atom)
    ;; for debugging
    (def global-details-atom project-details-atom)
    (fn []
      ;; TODO standardize this into a top-level page wrapper
      [:v-box.w-screen.w-screen.items-center.h-screen
       [:v-box.w-screen.h-full.max-w-5xl
        [:div.text-xl.mt-4 "Your project has been created!"]
        [:div.mx-4.text-xs "If you'd like, you can edit it to add more details."]
        (cond
          (not @project-details-atom)
          [:div "loading..."]

          :else
          [project-details-view project-details-atom]
          )
        ]]
      )))

(defn load-review-project-page []
  (rdom/render [review-project-page]
               (js/document.getElementById "main-app")))
