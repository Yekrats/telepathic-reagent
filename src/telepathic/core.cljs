(ns ^:figwheel-hooks telepathic.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [cljs.pprint :refer [pprint]]
   [clojure.string :as str]
   [telepathic.logic :refer [condition-asset condition-cards colors define-target do-action
                             initiate-actions shapes sls tile-asset play-state-losing?]]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom
                    {:color-player (condition-cards colors)
                     :shape-player (condition-cards shapes)
                     :board (sls)
                     :actions (initiate-actions)
                     :selected-action nil
                     :action-confirmed nil
                     :current-player :color-player
                     :lost-game nil}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn deck-manipulations
  "Perform manipulations on the tile board and card deck based on player activities."
  [row-index col-index]
  (let [tile-index (+ (* row-index 4) col-index)
        selected (:selected-action @app-state)
        available (-> @app-state :actions :available)
        selected-index (.indexOf available selected) ; Check if key is in the available actions.
        discard (-> @app-state :actions :discard) ; Discard deck.
        top-card (-> @app-state :actions :deck first) ; Top card of draw deck.
        rest-of-deck (-> @app-state :actions :deck rest vec)] ; Rest of the draw deck.
    (swap! app-state
           #(assoc @app-state
                   :board (do-action (:board @app-state)
                                     (define-target tile-index)
                                     (:selected-action @app-state))
                   :selected-action nil
                   :action-confirmed nil
                   :lost-game (play-state-losing? (:board @app-state))
                   :actions {
                             :available ; First we remove the selected action at index.
                                    (conj (vec (concat (subvec available 0 selected-index) ; Take all available cards 0 to index.
                                                       (subvec available (inc selected-index)))) ; Add to all cards one after index.
                                          top-card) ; And add the top card of the deck to the available cards.
                             :deck rest-of-deck  ; The deck will be the "rest" -- all but the first card.
                             :discard (conj discard selected)
}   ; Adding the selected card to the end of the discard pile
                   ))))

(defn selected-not-confirmed? []
   (and (not (:action-confirmed @app-state)) (some? (:selected-action @app-state))))

(defn select-action-phase? []
  (or (nil? (:selected-action @app-state)) (selected-not-confirmed?)))

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
  [:div {:id "action-cards"
         :class (when (select-action-phase?) "highlight")}
   (map-indexed (fn [index action]
                  [:img {:src (str "/images/" (name action) ".png")
                         :class (str (cond
                                       (= (:selected-action @app-state) action) "selected-action-card "
                                       (some? (:selected-action @app-state)) "non-selected-action-card ")
                                     "card-image action-card")
                         :key index
                         :onClick (fn [_] (swap! app-state #(assoc @app-state :selected-action action)))}])
 ;;               (filter #(or (not (:action-confirmed @app-state))
 ;;                            (= (:selected-action @app-state) %))
                        (-> @app-state :actions :available))])

(defn player-str
  "With no arguments, gives a text string of who the current player is.
  With a key player argument, gives text string of that player.
  Returns either 'color' or 'shape'."

  ([]       (player-str (:current-player @app-state)))
  ([player] (->> player name (take 5) (apply str))))

(defn address-player
  "Returns 'Shape player' or 'Color player' - used to address the current player."
  []
  (str (str/capitalize (player-str)) " player"))

(defn render-player
  "Takes a player key, and renders either color or shape player's condition cards.
  Inputs either :color-player or :shape-player."
  [player]
    [:<>
     [:div {:class "condition-card"}
        [:img {:src (str "/images/" (player-str player) "-win.png")
           :class "card-image condition-back"}]
        [:img {:src (condition-asset (-> @app-state player :win))
           :class "card-image condition-front"}]]
     [:div {:class "condition-card"}
        [:img {:src (str "/images/" (player-str player) "-lose.png")
           :class "card-image condition-back"}]
        [:img {:src (condition-asset (-> @app-state player :lose))
           :class "card-image condition-front"}]]])

(defn other-player
  "Returns the other player who is not :current-player."
  []
  (if (= (:current-player @app-state) :color-player) :shape-player :color-player))



(defn render-instructions
  "Instructs the players what to do next."
  []
  (cond
    (:lost-game @app-state)                 "The game is lost."
    (nil? (:selected-action @app-state))    (str (address-player) " - Select an action.")
    (selected-not-confirmed?)               (str (address-player) " - Confirm the action or select different action.")
    (and (:selected-action @app-state) (:action-confirmed @app-state))
                                            (str (address-player) " - Select where to apply the action.")))

(defn render-game []
  [:<>
   [:div {:class "instructions"}
    (render-instructions)]

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
