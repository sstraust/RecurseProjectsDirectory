(ns rcprojectsdir.design-components.main-homepage
  (:require [reagent.core :as r]))



(defn dropdown-list-item [selected-item item-id item-title]
  [:li
   [:a {:on-click #(reset! selected-item item-id)}
       item-title]])

(defn dropdown-select-project [selected-item]
 [:div.dropdown.dropdown-bottom.rounded-lg
   {:style {:border-style "solid"
            :border-width 1
            :border-color "#aaaaaa"
            :min-width "20rem"}}
   [:label.btn.btn-ghost.rounded-btn.normal-case.flex.flex-row.justify-between
    {:tabIndex "0"
     :role "button"}
    @selected-item
    [:img {:src "resources/svgs/dropdown.svg"}]]
    [:ul.menu.dropdown-content.bg-base-200.rounded-box.mt-4.w-52.p-2.shadow-sm
     {:tabIndex "0"
      :class "z-[1]"}
     [dropdown-list-item selected-item "Project You Just Made"
      [:<> "Project You Just Made"
       [:img {:src "resources/svgs/dot.svg"}]]]
     [dropdown-list-item selected-item "Other Project" "Other Project"]
     [dropdown-list-item selected-item "An Even Older Project" "An Even Older Project"]]])


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

(defn get-project-name-from-id [selected-project-id* projects*]
  (or
   (some
    (fn [x]
      (when (= (:id x) @selected-project-id*)
        (:name x))) @projects*)
   (default-project-name)))

(defn select-project-dropdown [selected-project-id* projects*]
  [:div.dropdown.dropdown-bottom.rounded-lg
   {:style {:border-style "solid"
            :border-width 1
            :border-color "#aaaaaa"
            :min-width "20rem"}}
   [:label.btn.btn-ghost.rounded-btn.normal-case.flex.flex-row.justify-between
    {:tabIndex "0"
     :role "button"}
    (get-project-name-from-id @selected-project-id* projects*)
    [:img {:src "resources/svgs/dropdown.svg"}]]
    [:ul.menu.dropdown-content.bg-base-200.rounded-box.mt-4.w-52.p-2.shadow-sm
     (for [{:keys [id name]} @projects*]
       [dropdown-list-item selected-project-id* id name])
     [:button.btn.btn-outline.btn-primary.btn-xs
      {:type "button"
       :on-click (fn [] (reset! selected-project-id* -1))}
      "+ New Project"]]])
  


(defn test-ui []
  (let [selected-item (r/atom "Project you just made")]
    (fn []
  [:v-box.items-center
   [:div.navbar.bg-base-300.w-full
    [:div.flex-1
     [:div.font-bold "RC Projects Directory"]]
    [:div
     [:button.btn.btn-outline.h-10
      {:style {:min-height "min-content"}}
      "+ New Project"]
     [:div.avatar
      [:v-box.w-10.h-10.mx-3.rounded-full.bg-base-200.justify-center.items-center "S"]]]]

   [:div
    {:style {:width "63rem"}}
    [:v-box.items-start.w-full
     [:p "Share what you're working on:"]]
    [:div.w-full.items-start [dropdown-select-project selected-item]]]])))

