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
  [:v-box.bg-base-100.rounded-xl {:style {:margin-left "1.875rem"
                                          :margin-right "1.875rem"
                                          :margin-bottom "1.875rem"}}
   [:h-box.justify-between.items-center
    {:style {:margin-right "1.875rem"}}
    [:v-box
     {:style {:margin-top "1.5rem"
              :margin-left "1.875rem"}}
     [:h2.font-bold
      
      {:style {:font-size "2.1875rem"}}
      name]
     [:h-box
      [:div.rounded-full
       {:style
        {:width "2.0625rem"
         :height "2.0625rem"
         :background-color "#9B9B9B"
         :margin-right "0.625rem"}}
       "."]
      [:a.link.text-link-color {:style {:font-size "1.5625rem"}}
       author]]]
    [:div.badge.bg-badge-primary.font-semibold.px-5
     {:style {:height "2.688rem"
              :background-color "#86CEFF"
              :font-size "1.25rem"}}
     "Updated Today"]]
   [:h-box.justify-between.w-full
    [:div.font-normal
    {:style {:margin-left "3.438rem"
             :padding-bottom "1.875rem"
             :margin-top "1.875rem"
             :font-size "1.563rem"}}
     description]
    [:div.self-end.font-bold.underline
     {:style {:padding-bottom "1.875rem"
              :padding-right "1.875rem"
              :font-size "1.5rem"
              }}
     "View →"]]
    ])


(defn my-projects []
  (let [users-projects* (r/atom [])]
    (get-users-projects users-projects*)
    (fn []
      [:div
       (cond
         (empty? @users-projects*)
         [:p.text-sm "No projects yet or still loading..."]
         
         :else
         [:div
          (for [{:keys [id] :as project} @users-projects*]
            ^{:key id}
            [project-card project])])])))