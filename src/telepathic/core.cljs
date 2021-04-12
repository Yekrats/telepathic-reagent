(ns ^:figwheel-hooks telepathic.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [cljs.pprint :refer [pprint]]
   [telepathic.logic :refer [condition-asset condition-cards colors define-target do-action initiate-actions shapes sls tile-asset]]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom
                    {:color-player (condition-cards colors)
                     :shape-player (condition-cards shapes)
                     :board (sls)
                     :actions (initiate-actions)
                     :selected-action nil
                     :action-confirmed nil
                     :current-player :color-player}))

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
                                    [:img {:src     (tile-asset card)
                                           :class   "card-image"
                                           :onClick (fn [_]
                                                      (when (:action-confirmed @app-state)
                                                        (let [card-index (+ (* row-index 4) col-index)]
                                                          (swap! app-state
                                                                 #(assoc @app-state  ;; FIX - Move :selected-action to :actions :discards
                                                                                     ;; FIX - Draw new action card from deck. New deck is "rest" of deck.
                                                                         :board (do-action (:board @app-state)
                                                                                           (define-target card-index)
                                                                                           (:selected-action @app-state))
                                                                         :selected-action nil
                                                                         :action-confirmed nil)))))}]])
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
                         :onClick (fn [_] (swap! app-state #(assoc @app-state :selected-action action)))}])
                (filter #(or (not (:action-confirmed @app-state))
                             (= (:selected-action @app-state) %))
                        (-> @app-state :actions :available)))])

(defn render-player
  "Takes a player key, and renders either color or shape player's condition cards.
  Inputs either :color-player or :shape-player."
  [player]
  (let [player-str (->> player name (take 5) (apply str))] ; Take the string out of the key. (First 5 letters.)
    [:<>
     [:div {:class "condition-card"}
        [:img {:src (str "/images/" player-str "-win.png")
           :class "card-image condition-back"}]
        [:img {:src (condition-asset (-> @app-state player :win))
           :class "card-image condition-front"}]]
     [:div {:class "condition-card"}
        [:img {:src (str "/images/" player-str "-lose.png")
           :class "card-image condition-back"}]
        [:img {:src (condition-asset (-> @app-state player :lose))
           :class "card-image condition-front"}]]]))

(defn other-player
  "Returns the other player who is not :current-player."
  []
  (if (= (:current-player @app-state) :color-player) :shape-player :color-player))

(defn render-game []
  [:<>
   [:div {:class "row"}
    (render-board)
    (render-actions)]
   (when (and (not (:action-confirmed @app-state)) (some? (:selected-action @app-state)))
     [:div {:class "row"}
      [:button
       {:onClick (fn [_] (swap! app-state #(assoc @app-state :action-confirmed true
                                                            :current-player (other-player))))}
       "Confirm"]])
   [:div {:class "row"}
    (if (= (:current-player @app-state) :color-player)
      (render-player :color-player)
      (render-player :shape-player))]])

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
