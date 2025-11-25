(ns rcprojectsdir.pages.home-page
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [easyreagent.components]
            [rcprojectsdir.common-components.navbar :as navbar]
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

(defn default-project-name []
  (str "NewProject_" (compact-date)))

(defn get-users-projects [projects*]
  (go
      (let [resp   (<! (http/get "/getUsersProjects"))
            body   (:body resp)
            parsed (cond
                    (map? body) body
                    (string? body)
                    (js->clj (js/JSON.parse body) :keywordize-keys true)
                    :else {})]
          ;;  body   (:body resp)]
        (when-let [projects (:projects parsed)]
          (reset! projects* projects))))
)

(defn create-project-fn [project-name* desc*]
  (fn [e]
    (.preventDefault e)
    ;; (js/alert "hi")
    (.log js/console "hi2")
        (when-not (seq @desc*)
          (js/alert "Please enter a description for your project"))
        (when (seq @desc*)
          (go
            (let [result (<! (http/post "/newProject"
                                        {:form-params {:project-name        @project-name*
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
                  (js/alert (or (:error body) "Something went wrong creating your project."))))))))
)

(defn update-project []
  (let [desc*         (r/atom "")
        project-name* (r/atom (default-project-name))
        projects*     (r/atom [])]

    (get-users-projects projects*)

  (fn []
    [:form.w-full.px-16
    {:on-submit
      (create-project-fn project-name* desc*)
    }

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
      [:div.self-start
      [:select
        {:class "select select-bordered select-xs opacity-70 subtle-select"
        :value @project-name*
        :on-change #(reset! project-name* (.. % -target -value))}
        ;; Default option
        [:option {:value (default-project-name)}
        (default-project-name)]
        ;; Existing projects
        (for [{:keys [id name]} @projects*]
          ^{:key id}
          [:option {:value name} name])]]

      ;; right side: button
      [:div
      [:button.btn.btn-primary
        {:type "submit"}
        "Create"]]]])))


(defn featured []
  [:div.h-64.w-full.bg-base-300.my-2
   "Featured"])

(defn feed []
  [:div.flex-grow.bg-base-300.my-4
   "Feed"])

(defn home-page []
  [:v-box.w-screen.w-screen.items-center.h-screen
   [:v-box.w-screen.h-full.max-w-5xl
    [navbar/full-navbar]
    [update-project]
    [featured]
    [feed]]])
