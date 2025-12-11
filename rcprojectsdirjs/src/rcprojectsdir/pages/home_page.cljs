(ns rcprojectsdir.pages.home-page
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [easyreagent.components]
   [easyreagent.components :as er]
   [rcprojectsdir.common-components.navbar :as navbar]
   [rcprojectsdir.feed.updates-feed :as updates-feed]
   [reagent.core :as r])
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

(defn get-users-projects [users-projects* selected-project-id*]
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
          (reset! users-projects* users-projects)
          (reset! selected-project-id* (:id (first users-projects))))))
)

;; (first @a4)



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


(defn dropdown-list-item [selected-item item-id item-title]
  [:li
   [:a {:on-mouse-down #(reset! selected-item item-id)}
       item-title]])

(defn get-project-name-from-id [selected-project-id users-projects*]
  (or
   (some
    (fn [x]
      (when (= (:id x) selected-project-id)
        (:name x))) @users-projects*)
   (default-project-name)))

(defn select-project-dropdown [selected-project-id* users-projects*]
  [:div.dropdown.dropdown-bottom.rounded-lg.mb-2
   {:style {:border-style "solid"
            :border-width 1
            :border-color "#aaaaaa"
            :width "19.65375rem"
            :height "3.3125rem"}}
   [:label.btn.btn-ghost.rounded-btn.normal-case.flex.flex-row.justify-between.font-normal.text-lg
    {:tabIndex "0"
     :role "button"}
    (get-project-name-from-id @selected-project-id* users-projects*)
    [:img {:src "resources/svgs/dropdown.svg"}]]
    [:ul.menu.dropdown-content.bg-base-200.rounded-box.mt-4.w-52.p-2.shadow-sm
     (for [{:keys [id name]} @users-projects*]
       [dropdown-list-item selected-project-id* id name])]])


(defn create-project-view [desc* selected-project-id* users-projects*]
  [:form.w-full.px-16
   {:on-submit
    (create-project-fn selected-project-id* users-projects* desc*)}
    [:p.text-xs.mb-2.text-xl "Add a Project"]

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
  [:form.w-full
   {:on-submit (create-update-fn desc* selected-project-id*)
    :style {:margin-top "3.75rem"
            :line-height "100%"
            :margin-bottom "3.75rem"}}
   [:p.font-bold
    {:style {:font-size "1.875rem"
             :height "2.1875rem"
             :line-height "100%"
             :margin-bottom "0.9375rem"}}
    "Share what you're working on:"]
   [:div
    {:style {:margin-bottom "0.9375rem"}}
    [select-project-dropdown selected-project-id* users-projects*]]
   [er/text-area {:placeholder "Add an update"
                  :style {:height "5.625rem"
                          :padding-top "0.9375rem"
                          :padding-left "1.25rem"
                          :font-size "1.25rem"}
                  :class "!max-w-none"} desc*]
   [:h-box.flex.items-start.justify-between
    {:style {:margin-top "0.9375rem"}}
    [:h-box.items-center
     [:div "+"]
    [:div.font-medium.underline
     {:style {:height "1.4375rem"
              :padding-left "0.9375rem"
              :font-size "1.25rem"}}
     "Add additional info"]]
    [:div
      [:button.btn.btn-primary
        {:type "submit"}
       "Update"]]
   ]]
  )



(defn update-project []
  (let [desc*         (r/atom "")
        selected-project-id* (r/atom -1)
        users-projects*     (r/atom [])]
    
    (get-users-projects users-projects* selected-project-id*)
    (fn []
      [:v-box.items-start.w-full
      (when (not (= @selected-project-id* -1))
        ;; [create-project-view desc* selected-project-id* users-projects*]
        [existing-projects-view desc* selected-project-id* users-projects*])])))



(defn featured []
  [:div.h-96.w-full.bg-base-300
   {:style {:margin-top "1.875rem"
            :min-height "24rem"}}
   "Featured"])




(defn home-page []
  [:v-box.w-screen.w-screen.items-center.h-screen
   [navbar/full-navbar]
   [:v-box.w-screen.h-full
    {:style {:width "63rem"}}
    [update-project]
    [updates-feed/updates-feed]
    ]])
;; (js/alert "hi!")
