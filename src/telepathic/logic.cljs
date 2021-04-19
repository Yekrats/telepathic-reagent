(ns telepathic.logic
  (:require            [clojure.string :as str]
                       [cljs.pprint :refer [pprint]]
))

(def testdata
  { :color-player {:win :purple, :lose :green},
    :shape-player {:win :bacon, :lose :star},
    :board [[:blue :circle]  [:green :bacon]  [:purple :circle] [:blue :cross]
            [:orange :cross] [:blue :star]    [:orange :circle] [:purple :star]
            [:green :star]   [:orange :star]  [:blue :bacon]    [:purple :cross]
            [:purple :bacon] [:green :circle] [:green :cross]   [:orange :bacon]],
    :actions {:available [:col-north :ew-reverse :corner-counterclockwise :row-east],
              :deck      [:row-west :col-south :ns-do-si-do :ns-reverse :ew-do-si-do
                          :corner-clockwise]
              :discard []}
    :current-player :color-player
    :selected-action nil
   })

(def players [:color-player :shape-player])

(def colors [:purple :blue :green :orange])

(def shapes [:cross :circle :star :bacon])

(def actions [:row-east :row-west :col-north :col-south
              :ew-do-si-do :ns-do-si-do :ew-reverse :ns-reverse
              :corner-clockwise :corner-counterclockwise])

(def tiles (vec (apply concat (into [] (for [color colors] (into [] (for [shape shapes] [color shape]))))))) ; added (apply concat ...) to flatten one level. -- sws

(defn condition-cards [cards]
  (zipmap [:win :lose] (take 2 (shuffle cards))))

(defn all-match?
  "Checks all the members of a set. If all match, return that value. Otherwise return nil."
  [set]
  (when (apply = set)
    (first set)))

(defn check4
  "Take in a set of 4 paired items.
  Check to see if any 3 contiguous items have a matching pattern in any color or shape.
  Returns nil if nothing found, or returns the matching color or shape."
  [set]
  (or
    (all-match? (first (apply map vector (first (partition 3 1 set)))))
    (all-match? (first (apply map vector (second (partition 3 1 set)))))
    (all-match? (second (apply map vector (first (partition 3 1 set)))))
    (all-match? (second (apply map vector (second (partition 3 1 set)))))))

(defn rot-90
  "Takes a sequence of 16 color/shape pairs and rotates it 90°."
  [s]
  (vec (apply concat (apply mapv vector (partition 4 s)))))

(defn any-row-match?
  "Performs check4 function, taking the first row '(take 4 s)', then calling
  itself recursively until all are taken."
  [s]
  (when (seq s)
    (or (check4 (take 4 s)) (any-row-match? (drop 4 s)))))

(defn any-col-match?
  "The same as any-row-match? function, but performing a 90° rotation first,
  to capture columns."
  [s] (any-row-match? (rot-90 s)))

(defn any-rc-match?
  "Do any row or column have a matching set [s] of 3?"
  [s] ((some-fn any-row-match? any-col-match?) s))

(defn sls  "A shuffled-legal-start of the tiles." []
  (loop [set (shuffle tiles) i 0]
    (if (or (not (any-rc-match? set)) (> i 100))
      (if (> i 99)
        i
        set)
      (recur (shuffle tiles) (inc i)))))

(defn initiate-actions []
  (let [deck (shuffle actions)]
    {:available (vec (take 4 deck))
     :deck (vec (nthrest deck 4))
     :discard []}))


(defn remove-action
  "An action (key) is moved from the available area to the
  discard pile of game-state (state). Returns the state, with the
  key card moved to the discard pile."
  [state key]
  (let [available (-> state :actions :available)
        index (.indexOf available key) ; Check if key is in the available actions.
        discard (-> state :actions :discard)]

    (if (= index -1) state ; If key is not found, just return the state.
        (-> state
            ; Otherwise, remove the action card at the index.
            (assoc-in [:actions :available] (vec (concat (subvec available 0 index)
                                                         (subvec available (inc index)))))
            ; Add the key to the end of the discard.
            (assoc-in [:actions :discard] (conj discard key))))))

(defn draw-action
  "Take the top card from the action deck of the game state (state), and put it on the bottom
  of the available pile.  Returns the new state."
  [state]
  (let [available (-> state :actions :available) ; Available action cards.
        top-card (-> state :actions :deck first) ; Top card of draw deck.
        rest-of-deck (-> state :actions :deck rest vec)] ; Rest of the draw deck.

    (-> state
        ; The new deck is all but the top card. I.e. the rest of the deck.
        (assoc-in [:actions :deck] rest-of-deck)
        ; The new available pile adds the top card to the available cards.
        (assoc-in [:actions :available] (conj available top-card)))))

(defn tile-asset
  "Takes in a key-pair (color & shape). Returns the name of the asset." ; :green :bacon => "Green Bacon.png"
  [[c s]]
  (str "/images/" (str/capitalize (name c)) "%20" (str/capitalize (name s)) ".png"))

(defn condition-asset
  ""
  [key]
  (str "/images/" (name key) "-condition.png"))

(defn push-one-row-forwards
  "Inputs a set of 4, outputs set pushed by one."
  [[%1 %2 %3 %4]]
  (seq [%4 %1 %2 %3]))

(defn push-one-row-backwards
  "Inputs a set of 4, outputs set pushed backwards by one."
  [[%1 %2 %3 %4]]
  (seq [%2 %3 %4 %1]))

(defn row-east
  "Takes in a set of 16 tiles (s), and pushes one 'rownum' to the east."
  [s rownum]
  (vec (apply concat (for [i (range 4)]
                       (if (= i rownum)
                         (push-one-row-forwards (take 4 (drop (* i 4) s)))
                         (take 4 (drop (* i 4) s)))))))

(defn row-west
  "Takes in a set of 16 tiles (s), and pushes one 'rownum' to the west."
  [s rownum]
  (vec (apply concat (for [i (range 4)]
                       (if (= i rownum)
                         (push-one-row-backwards (take 4 (drop (* i 4) s)))
                         (take 4 (drop (* i 4) s)))))))

(defn col-north   "Takes in a set of 16 tiles, and pushes one 'colnum' to the north."
  [s colnum]
  (rot-90 (row-west (rot-90 s) colnum)))

(defn col-south   "Takes in a set of 16 tiles, and pushes one 'colnum' to the south."
  [s colnum]
  (rot-90 (row-east (rot-90 s) colnum)))

(defn ew-reverse
  "Takes in a set of 16 tiles (s), and reverses one east-west row."
  [s rownum]
  (vec (apply concat (for [i (range 4)]
                       (if (= i rownum)
                         (reverse (take 4 (drop (* i 4) s)))
                         (take 4 (drop (* i 4) s)))))))

(defn ns-reverse   "Takes in a set of 16 tiles, and reverses one north-south column."
  [s colnum]
  (rot-90 (ew-reverse (rot-90 s) colnum)))

(defn do-si-do "Inputs a set of 4. Outputs the same set with each pair reversed."
  [[%1 %2 %3 %4]]
   (seq [%2 %1 %4 %3]))

(defn ew-do-si-do
  "Takes in a set of 16 tiles (s), and performs do-si-do one east-west row."
  [s rownum]
  (vec (apply concat (for [i (range 4)]
                       (if (= i rownum)
                         (do-si-do (take 4 (drop (* i 4) s)))
                         (take 4 (drop (* i 4) s)))))))

(defn ns-do-si-do  "Takes in a set of 16 tiles, and performs do-si-do on one north-south column."
  [s colnum]
  (rot-90 (ew-do-si-do (rot-90 s) colnum)))

(defn rotate-board-clockwise [[c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16]]
  [c13 c9 c5 c1
	 c14 c10 c6 c2
	 c15 c11 c7 c3
	 c16 c12 c8 c4])

(defn rotate-quad0-clockwise
  "Rotate the tiles of the upper left quadrant clockwise."
  [[c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16]]
  [c5 c1 c3 c4
	 c6 c2 c7 c8
	 c9 c10 c11 c12
	 c13 c14 c15 c16])

(defn rotate-quad0-counterclockwise
  "Rotate the tiles of the upper left quadrant counterclockwise."
  [[c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16]]
	[c2 c6 c3 c4
	 c1 c5 c7 c8
	 c9 c10 c11 c12
	 c13 c14 c15 c16])

(defn rotate-quad
  "Rotate quadrant N of board according to QUADRANT-ROTATION-FUNCTION where quadrants are numbered
  sequentially, clockwise from upper left."
  [board n quadrant-rotation-function]

	(let [rotated-rotated (quadrant-rotation-function
	;; Rotate the whole board counterclockwise n times
	                       (nth (iterate rotate-board-clockwise board) (mod (* n -1) 4)))]
	;; Rotate the whole board back to its original position
	  (nth (iterate rotate-board-clockwise rotated-rotated) n)))

(defn corner-clockwise
  "Rotates the quadrant number 'quad' clockwise on a set of tiles 's'.
  Returns a new set of tiles."
  [s quad]
  (rotate-quad s quad rotate-quad0-clockwise))

(defn corner-counterclockwise
  "Rotates the quadrant number 'quad' counterclockwise on a set of tiles 's'.
  Returns a new set of tiles."
  [s quad]
  (rotate-quad s quad rotate-quad0-counterclockwise))

(defn define-target
  "Input a cell number 0-15; return a map of the row, column, and quad."
  [cell-num]
   {:row (int (Math/floor (/ cell-num 4)))
    :column (mod cell-num 4)
    :quad (case cell-num
            0 0   1 0   2 1   3 1
            4 0   5 0   6 1   7 1
            8 3   9 3   10 2  11 2
            12 3  13 3  14 2     2)})

(defn targeter
  "Show the target of a particular action.
   Input an action key, and it will return, :row, :column, or :quad."
  [action]
  (cond
    (some #(= action %) '(:row-east :row-west :ew-do-si-do :ew-reverse)) :row
    (some #(= action %) '(:col-north :col-south :ns-do-si-do :ns-reverse)) :column
    :else :quad))

(defn do-action
  "Performs an action on a set of tiles (s) starting from a particular starting target (target).
  Returns a new set of tiles."
  [s target action]
  (let [function ((ns-publics 'telepathic.logic) (-> action name symbol))
        target-arg ((targeter action) target)]
    (function s target-arg)))
