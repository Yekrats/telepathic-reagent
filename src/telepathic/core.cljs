(ns ^:figwheel-hooks telepathic.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [cljs.pprint :refer [pprint]]
   [clojure.string :as str]
   [telepathic.logic :refer [condition-asset condition-cards colors define-target do-action
                             initiate-actions shapes sls tile-asset play-state-losing?
                             play-state-winning?]]))

(defn new-game []
  {:color-player (condition-cards colors)
   :shape-player (condition-cards shapes)
   :board (sls)
   :actions (initiate-actions)
   :selected-action nil
   :action-confirmed nil
   :current-player :color-player
   :declarations nil
   :animation-classes nil})

(defonce app-state (atom (new-game)))

(defn get-app-element []
  (gdom/getElement "app"))

(defn add-animation-to-row [col-index animation]
  (into [] (concat (repeat col-index "") (list animation) (repeat (- 3 col-index) ""))))

(def blank-animation-row ["" "" "" ""])

(def blank-animation-board (repeat 4 blank-animation-row))

(defn animate-col-south [col-index]
  (conj (vec (repeat 3 (add-animation-to-row col-index "animate-down-one")))
        (add-animation-to-row col-index "animate-up-three-arc")))

(defn animate-col-north [col-index]
  (into [] (concat (vector (add-animation-to-row col-index "animate-down-three-arc"))
       (repeat 3 (add-animation-to-row col-index "animate-up-one")))))

(defn animate-ns-reverse [col-index]
 [(add-animation-to-row col-index "animate-down-three-arc")
  (add-animation-to-row col-index "animate-down-one-arc")
  (add-animation-to-row col-index "animate-up-one-arc")
  (add-animation-to-row col-index "animate-up-three-arc")])

(defn animate-ns-do-si-do [col-index]
  [(add-animation-to-row col-index "animate-down-one-arc")
   (add-animation-to-row col-index "animate-up-one-arc")
   (add-animation-to-row col-index "animate-down-one-arc")
   (add-animation-to-row col-index "animate-up-one-arc")])

(defn animate-row-east [row-index]
  (into [] (concat (repeat row-index blank-animation-row)
                   [["animate-right-one"
                     "animate-right-one"
                     "animate-right-one"
                     "animate-left-three-arc"]]
                   (repeat (- 3 row-index) blank-animation-row))))

(defn animate-row-west [row-index]
  (into [] (concat (repeat row-index blank-animation-row)
                   [["animate-right-three-arc"
                     "animate-left-one"
                     "animate-left-one"
                     "animate-left-one"]]
                   (repeat (- 3 row-index) blank-animation-row))))

(defn animate-ew-do-si-do [row-index]
  (into [] (concat (repeat row-index blank-animation-row)
                   [["animate-right-one-arc"
                     "animate-left-one-arc"
                     "animate-right-one-arc"
                     "animate-left-one-arc"]]
                   (repeat (- 3 row-index) blank-animation-row))))

(defn animate-ew-reverse [row-index]
  (into [] (concat (repeat row-index blank-animation-row)
                   [["animate-right-three-arc"
                     "animate-right-one-arc"
                     "animate-left-one-arc"
                     "animate-left-three-arc"]]
                   (repeat (- 3 row-index) blank-animation-row))))

(defn quadrant [row-index col-index]
  (let [row-quad-index (int (Math/floor (/ row-index 2)))
        col-quad-index (int (Math/floor (/ col-index 2)))]
    (list row-quad-index col-quad-index)))

(defn animate-corner-clockwise [row-index col-index]
  (let [clicked-quadrant (quadrant row-index col-index)]
    (into [] (map (fn [row]
                   (into [] (map (fn [col]
                                   (if (not= (quadrant row col) clicked-quadrant)
                                     ""
                                     (cond
                                       (and (even? row) (even? col)) "animate-right-one-arc"
                                       (and (even? row) (odd? col)) "animate-down-one-arc"
                                       (and (odd? row) (odd? col)) "animate-left-one-arc"
                                       (and (odd? row) (even? col)) "animate-up-one-arc")))
                                 (range 4))))
                 (range 4)))))

(defn animate-corner-counterclockwise [row-index, col-index]
  (let [clicked-quadrant (quadrant row-index col-index)]
    (into [] (map (fn [row]
                   (into [] (map (fn [col]
                                   (if (not= (quadrant row col) clicked-quadrant)
                                     ""
                                     (cond
                                       (and (even? row) (even? col)) "animate-down-one-arc-widdershins"
                                       (and (even? row) (odd? col)) "animate-left-one-arc-widdershins"
                                       (and (odd? row) (odd? col)) "animate-up-one-arc-widdershins"
                                       (and (odd? row) (even? col)) "animate-right-one-arc-widdershins")))
                                 (range 4))))
                 (range 4)))))

(defn animation-classes [row-index col-index]
  (case (:selected-action @app-state)
      :col-south (animate-col-south col-index)
      :col-north (animate-col-north col-index)
      :ns-reverse (animate-ns-reverse col-index)
      :ns-do-si-do (animate-ns-do-si-do col-index)
      :row-east (animate-row-east row-index)
      :row-west (animate-row-west row-index)
      :ew-do-si-do (animate-ew-do-si-do row-index)
      :ew-reverse (animate-ew-reverse row-index)
      :corner-clockwise (animate-corner-clockwise row-index col-index)
      :corner-counterclockwise (animate-corner-counterclockwise row-index col-index)))

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
                   :animation-classes (animation-classes row-index col-index)))
    (js/setTimeout
     (fn []
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
                                :deck rest-of-deck ; The deck will be the "rest" -- all but the first card.
                                :discard (conj discard selected)} ; Adding the selected card to the end of the discard pile
                      :animation-classes nil)))
     1000)))

(defn selected-not-confirmed? []
  (and (not (:action-confirmed @app-state)) (some? (:selected-action @app-state))))

(defn selected-and-confirmed? []
  (and (:action-confirmed @app-state) (some? (:selected-action @app-state))))

(defn select-action-phase? []
  (or (nil? (:selected-action @app-state)) (selected-not-confirmed?)))

(defn start-of-turn? []
  (and (not (play-state-losing? @app-state))
       (nil? (:selected-action @app-state))
       (not (:declarations @app-state))))

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

(defn other-player
  "Returns the other player who is not :current-player."
  []
  (if (= (:current-player @app-state) :color-player) :shape-player :color-player))

(defn add-declaration
  "Add color or shape declaration to app state"
  [condition]
  (swap! app-state #(assoc @app-state
                           :declarations (conj (:declarations @app-state) condition)
                           :current-player (other-player))))

(defn apply-animation-classes [row column]
  (when (selected-and-confirmed?)
    (cond (and (= row 0) (= column 3))
          "animate-down-one"
          (and (= row 1) (= column 3))
          "animate-down-one"
          (and (= row 2) (= column 3))
          "animate-down-one"
          (and (= row 3) (= column 3))
          "animate-up-three"
          :else
          "")))

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
                                           :class   (str "card-image"
                                                         " "
                                                         (and (some? (:animation-classes @app-state))
                                                              (str "animate "
                                                                   (get
                                                                    (get (:animation-classes @app-state) row-index) col-index))))
                                           :onClick (fn [_]
                                                      (when (and (:action-confirmed @app-state) (not (play-state-losing? @app-state)))
                                                        (deck-manipulations row-index col-index)))}]])
                                 row)])
                 (partition 4 (:board @app-state)))]])

(defn render-actions
  "Render the four current actions from state."
  []
  [:div {:id "action-cards"
         :class (when (select-action-phase?) "highlight")}
   (map-indexed (fn [index action]
                  [:img {:src (str "images/" (name action) ".png")
                         :class (str (cond
                                       (= (:selected-action @app-state) action) "selected-action-card "
                                       (some? (:selected-action @app-state)) "non-selected-action-card ")
                                     "card-image action-card")
                         :key index
                         :onClick (fn [_] (when (not (or (:declarations @app-state)
                                                         (play-state-losing? @app-state)))
                                            (swap! app-state #(assoc @app-state :selected-action action))))}])
                (-> @app-state :actions :available))])

(defn render-player
  "Takes a player key, and renders either color or shape player's condition cards.
  Inputs either :color-player or :shape-player."
  [player]
  [:<>
   [:div {:class "condition-card"}
    [:img {:src (str "images/" (player-str player) "-win.png")
           :class "card-image condition-back"}]
    [:img {:src (condition-asset (-> @app-state player :win))
           :class "card-image condition-front"}]]
   [:div {:class "condition-card"}
    [:img {:src (str "images/" (player-str player) "-lose.png")
           :class "card-image condition-back"}]
    [:img {:src (condition-asset (-> @app-state player :lose))
           :class "card-image condition-front"}]]])

(defn render-instructions
  "Instructs the players what to do next."
  []
  (cond
    (play-state-losing? @app-state)
    [:div
     [:div "The game is lost"]
     [:button {:onClick (fn [_] (reset! app-state (new-game)))}
      "New Game"]]
    (play-state-winning? @app-state)
    [:div "You are both TELEPATHIC!"]
    (:declarations @app-state) (str (address-player) " - Make a declaration")
    (nil? (:selected-action @app-state))    (str (address-player) " - Select an action")
    (selected-not-confirmed?)               (str (address-player) " - Confirm the action or select different action")
    (and (:selected-action @app-state) (:action-confirmed @app-state))
    (str (address-player) " - Select where to apply the action")))

(defn render-conditions
  "Render the condition images for the current player"
  []
  [:div {:id "condition-cards"}
   (map-indexed (fn [index condition]
                  [:img {:src (condition-asset condition)
                         :key index
                         :onClick (fn [_] (add-declaration condition))}])
                (if (= :color-player (:current-player @app-state))
                  shapes
                  colors))])

(defn render-upper-area
  "Render the upper area containing buttons and declarations"
  []
  [:div {:class "row"}
   (cond
     (play-state-winning? @app-state)
     [:button
      {:onClick (fn [_] (swap! app-state new-game))}
      "Play Again"]
     (selected-not-confirmed?)
     [:button
      {:onClick (fn [_] (swap! app-state #(assoc @app-state :action-confirmed true
                                                 :current-player (other-player))))}
      "Confirm"]
     (start-of-turn?)
     [:button
      {:onClick (fn [_] (swap! app-state #(assoc @app-state :declarations [])))}
      "Declare"]
     (:declarations @app-state)
     (render-conditions)
     :else [:div])])

(defn render-game
  "Basic rendering of the game screen:
    1. Instructional area
    2. Upper area with action buttons and declaration cards
    3. A section for the board on the left with actions on the right
    4. A lower section for the players' goal cards"
  []
  [:<>
   [:div {:id "instructions"}
    (render-instructions)]
   [:div {:id "upper-area"}
    (render-upper-area)]
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
