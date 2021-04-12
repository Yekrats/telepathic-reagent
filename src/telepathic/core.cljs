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

(defn deck-manipulations
  ""
  [row-index col-index]
  (let [card-index (+ (* row-index 4) col-index)
        selected :selected-action
        available (-> @app-state :actions :available)
        selected-index (.indexOf available selected) ; Check if key is in the available actions.
        discard (-> @app-state :actions :discard) ; Discard deck.
        top-card (-> @app-state :actions :deck first) ; Top card of draw deck.
        rest-of-deck (-> @app-state :actions :deck rest vec)] ; Rest of the draw deck.
    (swap! app-state
           #(assoc @app-state
                   :board (do-action (:board @app-state)
                                     (define-target card-index)
                                     (:selected-action @app-state))
                   :selected-action nil
                   :action-confirmed nil
                   ;; :actions {
                   ;;           :available ; First we remove the selected action at index.
                   ;;                  (conj (vec (concat (subvec available 0 selected-index) ; Take all available cards 0 to index.
                   ;;                                      (subvec available (inc selected-index)))) ; Add to all cards one after index.
                   ;;                          top-card) ; And add the top card of the deck to the available cards.
                   ;;           :deck rest-of-deck  ; The deck will be the "rest" -- all but the first card.
                   ;;           :discard (conj discard selected)}
                   )))) ; Adding the seleccted card to the end of the discard pile.

(defn render-board
  "Render the game board (16 tiles) from app state."
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
                                                       (deck-manipulations row-index col-index)))}]])
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
