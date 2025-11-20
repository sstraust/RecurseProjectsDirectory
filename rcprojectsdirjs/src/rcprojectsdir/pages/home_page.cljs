(ns rcprojectsdir.pages.home-page
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [easyreagent.components]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def counter (r/atom 0))

(defn navbar []
  [:div.navbar.text-xl
   [:div "RC Projects"]
   [:div.mx-12 "test: the value of the counter is :" @counter]])

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

(defn update-project []
  (let [desc*         (r/atom "")
        project-name* (r/atom (default-project-name))
        projects*     (r/atom [])]

    (r/create-class
      {:component-did-mount
       (fn []
         (go
           (let [resp   (<! (http/get "/getUsersProjects" {:with-credentials? false}))
                 body   (:body resp)
                 parsed (cond
                          (map? body) body
                          (string? body)
                          (js->clj (js/JSON.parse body) :keywordize-keys true)
                          :else {})]
             (when-let [projects (:projects parsed)]
               (reset! projects* projects)))))

       :reagent-render
       (fn []
         [:form.w-full.px-16
          {:on-submit
           (fn [e]
             (.preventDefault e)
             (when (seq @desc*)
               (go
                 (let [result (<! (http/post "/newProject"
                                             {:form-params {:project-name        @project-name*
                                                            :project-description @desc*}}))]
                   (.log js/console (clj->js result))
                   (reset! desc* "")))))}

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
             "Create"]]]])})))

(defn featured []
  [:div.h-64.w-full.bg-base-300.my-2
   "Featured"])

(defn feed []
  [:div.flex-grow.bg-base-300.my-4
   "Feed"])

(defn home-page []
  [:v-box.w-screen.w-screen.items-center.h-screen
   [:v-box.w-screen.h-full.max-w-5xl
    [navbar]
    [update-project]
    [featured]
    [feed]]])
