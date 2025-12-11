(ns rcprojectsdir.pages.view-project-page
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [rcprojectsdir.common-components.navbar :as navbar])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn get-project-id-from-url []
  (let [params (js/URLSearchParams. (.-search js/location))]
    (.get params "project")))

;; TODO: add a backend route for /getProjectDetails
;; (defn fetch-project-from-users-projects! [project*]
;;   (let [project-id (js/parseInt (get-project-id-from-url))]
;;     (go
;;       (let [resp   (<! (http/get "/getUsersProjects"))
;;             body   (:body resp)
;;             parsed (cond
;;                      (map? body) body
;;                      (string? body)
;;                      (js->clj (js/JSON.parse body) :keywordize-keys true)
;;                      :else {})
;;             projects (:users-projects parsed)]
;;         (when-let [p (some #(when (= (:id %) project-id) %) projects)]
;;           (reset! project* p))))))
(defn fetch-project-from-users-projects! [project*]
  (let [project-id-str (get-project-id-from-url)
        project-id     (js/parseInt project-id-str)]
    (when project-id-str
      (go
        (let [resp   (<! (http/get "/getUsersProjects"))
              body   (:body resp)
              parsed (cond
                       (map? body) body
                       (string? body)
                       (js->clj (js/JSON.parse body) :keywordize-keys true)
                       :else {})
              projects (:users-projects parsed)]
          (when-let [p (some #(when (= (:id %) project-id) %) projects)]
            (reset! project* p)))))))

(defn project-detail-view []
  (let [project* (r/atom nil)]
    (fetch-project-from-users-projects! project*)
    (fn []
      [:v-box.w-screen.items-center.h-screen
       [navbar/full-navbar]
       [:v-box.w-screen.h-full
        {:style {:width "63rem"
                 :padding "2rem 0"}}
        (cond
          (nil? @project*)
          [:p "Loading project..."]

          :else
          (let [{:keys [name description author created_at]} @project*]
            [:<>
             [:h1.font-bold
              {:style {:font-size "2.25rem"
                       :margin-bottom "0.5rem"}}
              name]

             [:p.text-lg.text-gray-500
              {:style {:margin-bottom "1.5rem"}}
              (str "By " author " • " created_at)]

             [:p
              {:style {:font-size "1.25rem"
                       :line-height "1.5"
                       :margin-bottom "2rem"}}
              description]

             [:a.link.text-link-color.font-semibold
              {:on-click #(set! (.-href (.-location js/window)) "/")}
              "← Back to projects"]]))]])))

(defn ^:export init []
  (rdom/render [project-detail-view]
               (js/document.getElementById "main-app")))
