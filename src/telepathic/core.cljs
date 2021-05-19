(ns ^:figwheel-hooks telepathic.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [cljs.pprint :refer [pprint]]
   [clojure.string :as str]
   [telepathic.logic :refer [condition-asset condition-cards colors define-target do-action
                             initiate-actions shapes sls tile-asset play-state-losing? test-rc]]))

(defn new-game []
  {:color-player (condition-cards colors)
   :shape-player (condition-cards shapes)
   :board (sls)
   :actions (initiate-actions)
   :selected-action nil
   :action-confirmed nil
   :current-player :color-player
   :lost-game nil
   :declarations nil})

(defonce app-state (atom (new-game)))

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
        rest-of-deck (-> @app-state :actions :deck rest vec) ; Rest of the draw deck.
        rest-of-available ; First we remove the selected action at index.
        (vec (concat (subvec available 0 selected-index) ; Take all available cards 0 to index.
                     (subvec available (inc selected-index))))]
    (swap! app-state
           #(assoc @app-state
                   :board (do-action (:board @app-state)
                                     (define-target tile-index)
                                     (:selected-action @app-state))
                   :selected-action nil
                   :action-confirmed nil
                   :actions {:available
                             (if top-card
                               (conj rest-of-available top-card) ; Add the top card of the avail to the available cards.
                               rest-of-available) ; Or, if no top card, just use what's available.
                             :deck rest-of-deck  ; The deck will be the "rest" -- all but the first card.
                             :discard (conj discard selected)}   ; Adding the selected card to the end of the discard pile
                   ))
    (swap! app-state
           #(assoc @app-state :lost-game (play-state-losing? @app-state)))))

(defn selected-not-confirmed? []
  (and (not (:action-confirmed @app-state)) (some? (:selected-action @app-state))))

(defn select-action-phase? []
  (or (nil? (:selected-action @app-state)) (selected-not-confirmed?)))

(defn start-of-turn? []
  (and (not (play-state-losing? @app-state))
       (nil? (:selected-action @app-state))
       (not (:declarations @app-state))))

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
                                                      (when (and (:action-confirmed @app-state) (not (:lost-game @app-state)))
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
                         :onClick (fn [_] (when (not (or (:declarations @app-state)
                                                        (:lost-game @app-state)))
                                            (swap! app-state #(assoc @app-state :selected-action action))))}])
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
    (:lost-game @app-state) [:div
                              [:div "The game is lost"]
                                [:button {:onClick (fn [_] (reset! app-state (new-game)))}
                                         "New Game"]]
    (:declarations @app-state) (str (address-player) " - Make a declaration")
    (nil? (:selected-action @app-state))    (str (address-player) " - Select an action")
    (selected-not-confirmed?)               (str (address-player) " - Confirm the action or select different action")
    (and (:selected-action @app-state) (:action-confirmed @app-state))
    (str (address-player) " - Select where to apply the action")))

(defn render-conditions
  ""
  []

  )

(defn render-game []
  "Basic rendering of the game screen:
    1. Instructional area
    2. Command buttons.
    3. A section for the board with actions on the right.
    4. A section for the players' goal cards."
  [:<>
   [:div {:class "instructions"}
    (render-instructions)]

   [:div {:id "button-area"}
    [:div {:class "row"}
     (cond
       (selected-not-confirmed?)
       [:button
        {:onClick (fn [_] (swap! app-state #(assoc @app-state :action-confirmed true
                                                   :current-player (other-player))))}
        "Confirm"]
       (start-of-turn?) [:button
                         {:onClick (fn [_] (swap! app-state #(assoc @app-state :declarations {})))}
                         "Declare"]
       :else [:div])]
    ]

   [:div {:class "row"}
    (render-board)
    (render-actions)]
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
