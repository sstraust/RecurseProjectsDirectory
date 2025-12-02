(ns rcprojectsdir.pages.home-page
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [easyreagent.components]
            [rcprojectsdir.common-components.navbar :as navbar]
            [easyreagent.components :as er]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def counter (r/atom 0))



(defn compact-date []
  ;; "MM-DD-YYYY"
  (let [d     (js/Date.)
        mm    (str (inc (.getMonth d)))
        dd    (str (.getDate d))
        yyyy  (str (.getFullYear d))
        pad-2 (fn [s] (if (< (count s) 2) (str "0" s) s))]
    (str (pad-2 mm) "-" (pad-2 dd) "-" yyyy)))

(def rand-name-str (memoize (fn [] (rand-int 1000))))
  
(defn default-project-name []
  (str "NewProject_" (compact-date) "#" (rand-name-str)))

(defn get-users-projects [users-projects*]
  (go
      (let [resp   (<! (http/get "/getUsersProjects"))
            body   (:body resp)
            parsed (cond
                    (map? body) body
                    (string? body)
                    (js->clj (js/JSON.parse body) :keywordize-keys true)
                    :else {})]
          ;;  body   (:body resp)]
        (when-let [users-projects (:users-projects parsed)]
          (reset! users-projects* users-projects))))
)

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
          (reset! all-projects* all-projects))))
)

(defn create-project-fn [selected-project-id* users-projects* desc*]
  (fn [e]
    (.preventDefault e)
    (when-not (seq @desc*)
      (js/alert "Please enter a description for your project"))
        (when (seq @desc*)
          (go
            (let [result (<! (http/post "/newProject"
                                        {:form-params {:project-name        (or
                                                                             (some
                                                                              (fn [x]
                                                                                (when (= (:id x) @selected-project-id*)
                                                                                  (:name x))) @users-projects*)
                                                                             (default-project-name))
                                                       :project-description @desc*}}))
                  status (:status result)
                  body   (some-> (:body result)
                                 (js->clj :keywordize-keys true))]
              (if (= status 200)
                (do
                  (set! (.-href (.-location js/window))
                                   (str "/reviewProjectPage?project=" (:project-id (:body result)))))
                (do
                  (.error js/console "Failed to create project" (clj->js result))
                  (js/alert (or (:error body) "Something went wrong creating your project.")))))))))


(defn select-project-dropdown [selected-project-id* users-projects*]
  [:div.self-start
      [:select
        {:class "select select-bordered select-xs opacity-70 subtle-select"
        :value @selected-project-id*
        :on-change #(reset! selected-project-id* (js/parseInt (.. % -target -value)))}
        ;; Default option
        [:option {:value -1}
        (default-project-name)]
        ;; Existing projects
        (for [{:keys [id name]} @users-projects*]
          ^{:key id}
          [:option {:value id} name])]])


(defn create-project-view [desc* selected-project-id* users-projects*]
  [:form.w-full.px-16
     {:on-submit
      (create-project-fn selected-project-id* users-projects* desc*)}

    ;; Description input 
    [:div
      [:input.input.input-bordered.w-full
      {:type        "text"
        :placeholder "Tell us about your project"
        :value       @desc*
        :on-change   #(reset! desc* (.. % -target -value))}]]

    ;; Row with dropdown and button
    [:div.flex.items-center.justify-between.my-4
      ;; left side: dropdown 
      [select-project-dropdown selected-project-id* users-projects*]

      ;; right side: button
      [:div
      [:button.btn.btn-primary
        {:type "submit"}
       "Create"]]]])

(defn create-update-fn [desc* selected-project-id*]
;; (defn create-update-fn [desc* selected-project-id* users-projects*]
  (fn [e]
    (.preventDefault e)
    (when-not (seq @desc*)
      (js/alert "Please enter some text for your update"))
    (go
      (let [result (<! (http/post "/createUpdate"
                                  {:form-params {:project-id @selected-project-id*
                                                 :update-contents @desc*}}))]
          (if (= (:status result) 200)
            (.reload js/location)
            (js/alert "failed to update"))))))


(defn existing-projects-view [desc* selected-project-id* users-projects*]
  [:form.w-full.px-16
   {:on-submit (create-update-fn desc* selected-project-id*)}
  ;;  {:on-submit (create-update-fn desc* selected-project-id* users-projects*)}
   [:p.text-sm "post an update on an existing project"]
   [er/text-field {:placeholder "Write a project update"
                   :class "h-12 !max-w-none"} desc*]
   [:div.flex.items-center.justify-between.my-4
    [select-project-dropdown selected-project-id* users-projects*]
    [:div
      [:button.btn.btn-primary
        {:type "submit"}
       "Post"]]
   ]]
  )

(defn update-project []
  (let [desc*         (r/atom "")
        selected-project-id* (r/atom -1)
        users-projects*     (r/atom [])]

    (get-users-projects users-projects*)
    (fn []
      (if (= @selected-project-id* -1)
        [create-project-view desc* selected-project-id* users-projects*]
        [existing-projects-view desc* selected-project-id* users-projects*]))))



(defn featured []
  [:div.h-64.w-full.bg-base-300.my-2
   "Featured"])

(defn project-card [{:keys [id name description author created_at]}]
  [:div.card.bg-base-100.shadow-md.mb-4
   [:div.card-body
    [:h3.card-title name]
    [:p.text-sm.text-gray-500
     (str "By user " author " · " created_at)]
    (when (seq description)
      [:p.mt-2 description])]])

(defn feed []
  (let [all-projects* (r/atom [])]
    (get-all-projects all-projects*)

    (fn []
      (let [projects @all-projects*]
        [:div.flex-grow.bg-base-300.my-4.p-4
         [:h2.text-lg.font-bold.mb-2 "Feed"]

         (cond
           (empty? projects)
           [:p.text-sm "No projects yet or still loading..."]

           :else
           [:div.space-y-4
            (for [{:keys [id] :as project} projects]
              ^{:key id}
              [project-card project])])]))))

(defn home-page []
  [:v-box.w-screen.w-screen.items-center.h-screen
   [:v-box.w-screen.h-full.max-w-5xl
    [navbar/full-navbar]
    [update-project]
    [featured]
    [feed]]])



