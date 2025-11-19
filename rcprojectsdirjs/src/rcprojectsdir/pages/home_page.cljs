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

(defn update-project []
  (let [desc* (r/atom "")]
    (fn []
      [:form.w-full.px-16
       {:on-submit (fn [e]
                     (.preventDefault e)
                     (when (seq @desc*)
                       (go
                         (let [result (<! (http/post "/newProject"
                                                     {:form-params {:project-description @desc*}}))]
                           (.log js/console (clj->js result))
                           (reset! desc* "")))))}
       [:input.input.input-bordered.w-full
        {:type        "text"
         :placeholder "Tell us about your project"
         :value       @desc*
         :on-change   (fn [e]
                        (reset! desc* (.. e -target -value)))}]
       [:h-box.w-full.justify-end
        [:button.btn.btn-primary.mx-1.my-4
         {:type "submit"}
         "Create"]]])))

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
