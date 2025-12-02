(ns rcprojectsdir.feed.projects-feed
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [clojure.string :as str]
   [reagent.core :as r])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn get-all-projects [all-projects*]
  (go
      (let [resp   (<! (http/get "/getAllProjects"))
            body   (:body resp)
            parsed (cond
                    (map? body) body
                    (string? body)
                    (js->clj (js/JSON.parse body) :keywordize-keys true)
                    :else {})]
        (when-let [all-projects (:all-projects parsed)]
          (reset! all-projects* all-projects)))))

(defn get-searched-projects [search-str all-projects*]
  (go
    (let [resp   (<! (http/post "/searchProjects"
                                {:form-params {:search-str search-str}}))
            body   (:body resp)
            parsed (cond
                    (map? body) body
                    (string? body)
                    (js->clj (js/JSON.parse body) :keywordize-keys true)
                    :else {})]
        (when-let [all-projects (:all-projects parsed)]
          (reset! all-projects* all-projects)))))
  

(defn project-card [{:keys [id name description author created_at]}]
  [:div.card.bg-base-100.shadow-md.mb-4
   [:div.card-body
    [:h3.card-title name]
    [:p.text-sm.text-gray-500
     (str "By user " author " · " created_at)]
    (when (seq description)
      [:p.mt-2 description])]])


(defn projects-feed []
  (let [all-projects* (r/atom [])]
    (get-all-projects all-projects*)
    (fn []
      [:div
       {:style {:margin-left "1.563rem"
                :margin-right "1.813rem"}}
       (cond
         (empty? @all-projects*)
         [:p.text-sm "No projects yet or still loading..."]
         
         :else
         [:div.space-y-4
          [:input.input.input-bordered.w-full
           {:type        "text"
            :placeholder "search"
            :on-change   #(do
                            (if (str/blank? (.. % -target -value))
                              (get-all-projects all-projects*)
                              (get-searched-projects (.. % -target -value) all-projects*)))}]
          (for [{:keys [id] :as project} @all-projects*]
            ^{:key id}
            [project-card project])])])))
  



