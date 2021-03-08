(ns ^:figwheel-hooks telepathic.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [cljs.pprint :refer [pprint]]
   [telepathic.logic :refer [condition-cards colors shapes initiate-actions sls tile-asset condition-asset]]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom
                    {:color-player (condition-cards colors)
                     :shape-player (condition-cards shapes)
                     :board (sls)
                     :actions (initiate-actions)
                     :selected-action nil}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn render-board
  "Render the game board from app state."
  []
  [:table
   [:tbody
    (map-indexed (fn [row-index row]
                   [:tr {:key row-index}
                    (map-indexed (fn [col-index card]
                                   [:td {:key col-index}
                                    [:img {:src (tile-asset card)
                                           :class "card-image"}]])
                                 row)])
                 (partition 4 (:board @app-state)))]])

(defn render-actions
  "Render the four current actions from state."
  []
  [:div {:id "action-cards" }
   (map-indexed (fn [index action]
                  [:img {:src (str "/images/" (name action) ".png")
                         :class (str (when (= (:selected-action @app-state) action) "selected-action-card ") "card-image action-card")
                         :key index
                         :onClick (fn [_] (swap! app-state #(assoc @app-state :selected-action action) ) (pprint @app-state))
                         }])


                (-> @app-state :actions :available))])

(defn render-color-player
  "Render the condition cards for the color player from state."
  []
  [:<>
   [:div {:class "condition-card"}
    [:img {:src "/images/color-win.png"
           :class "card-image condition-back"}]
    [:img {:src (condition-asset (-> @app-state :color-player :win))
           :class "card-image condition-front"}]]
   [:div {:class "condition-card"}
    [:img {:src "/images/color-lose.png"
           :class "card-image condition-back"}]
    [:img {:src (condition-asset (-> @app-state :color-player :lose))
           :class "card-image condition-front"}]]])

(defn render-shape-player
  "Render the condition cards for the shape playre from state."
  []
  [:<>
   [:div {:class "condition-card"}
    [:img {:src "/images/shape-win.png"
           :class "card-image condition-back"}]
    [:img {:src (condition-asset (-> @app-state :shape-player :win))
           :class "card-image condition-front"}]]
   [:div {:class "condition-card"}
    [:img {:src "/images/shape-lose.png"
           :class "card-image condition-back"}]
    [:img {:src (condition-asset (-> @app-state :shape-player :lose))
           :class "card-image condition-front"}]]])

(defn render-game []
  [:<>
   [:div {:class "row" }
    (render-board)
    (render-actions)]
   (when (some? (:selected-action @app-state))
     [:div {:class "row"}
      [:button "Confirm"]])
   [:div {:class "row"}
    (render-color-player)
    (render-shape-player)]]
  )

(defn mount [el]
  (rdom/render [render-game] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
