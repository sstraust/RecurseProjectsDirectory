(ns rcprojectsdir.pages.home-page
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [easyreagent.components]
            [cljs.core.async :refer [<!]]))

(def counter (r/atom 0))


(defmacro post-request [path params & {:keys [:success :failure :json-response]}]
  `(cljs.core.async/go
     (let [result# (cljs.core.async/<! (cljs-http.client/post ~path {:json-params ~params}))]
       (cond
         (= (:result (:body result#)) "success")
         ((or ~success identity))

         
         (= (:easyreagent-result-type (:body result#)) "json")
         ((or ~json-response identity) (:body result#))
         :else (~failure (:reason (:body result#)))))))

(defn navbar []
  [:div.navbar.text-xl
   [:div "RC Projects"]
   [:div.mx-12 "test: the value of the counter is :" @counter]])

(defn update-project []
  [:form.w-full.px-16
   {:on-submit (fn [e]
                 (.preventDefault e)
                 (cljs.core.async/go
                   (let [result (cljs.core.async/<! (cljs-http.client/post
                                                     "/newProject"
                                                     {:form-params {:project-description "hello"}}))]
                     (.log js/console result))))}
   [:input.input.input-bordered.w-full
    {:type "text"
     :placeholder "Tell us about your project"}]
   [:h-box.w-full.justify-end
    [:button.btn.btn-primary.mx-1.my-4
     {:type "button"}
     "Create"]]])

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



