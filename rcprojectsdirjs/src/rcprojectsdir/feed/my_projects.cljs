(ns rcprojectsdir.feed.my-projects
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [clojure.string :as str]
   [reagent.core :as r])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn get-users-projects [users-projects*]
  (go
      (let [resp   (<! (http/get "/getUsersProjects"))
            body   (:body resp)
            parsed (cond
                    (map? body) body
                    (string? body)
                    (js->clj (js/JSON.parse body) :keywordize-keys true)
                    :else {})]
        (when-let [users-projects (:users-projects parsed)]
          (reset! users-projects* (sort-by :created_at > users-projects))))))

(defn project-card [{:keys [id name description author created_at]}]
  [:div.bg-base-100.shadow-md.mb-4.rounded-xl
   [:div.card-body
    [:h3.card-title name]
    [:p.text-sm.text-gray-500
     (str "By user " author " · " created_at)]
    (when (seq description)
      [:p.mt-2 description])]])


(defn my-projects []
  (let [users-projects* (r/atom [])]
    (get-users-projects users-projects*)
    (fn []
      [:div
       {:style {:margin-left "1.563rem"
                :margin-right "1.813rem"}}
       (cond
         (empty? @users-projects*)
         [:p.text-sm "No projects yet or still loading..."]
         
         :else
         [:div.space-y-4
          (for [{:keys [id] :as project} @users-projects*]
            ^{:key id}
            [project-card project])])])))
  



