(ns telepathic.logic)

(def testdata
  { :color-player {:win :purple, :lose :green},
    :shape-player {:win :bacon, :lose :star},
    :board [[:blue :circle]  [:green :bacon]  [:purple :circle] [:blue :plus]
            [:orange :plus]  [:blue :star]    [:orange :circle] [:purple :star]
            [:green :star]   [:orange :star]  [:blue :bacon]    [:purple :plus]
            [:purple :bacon] [:green :circle] [:green :plus]    [:orange :bacon]],
    :actions {:available [:col-north :ew-reverse :corner-counterclockwise :row-east],
              :deck      [:row-west :col-south :ns-do-si-do :ns-reverse :ew-do-si-do
                          :corner-clockwise]
              :discard []}})

(def players [:color-player :shape-player])

(def colors [:purple :blue :green :orange])

(def shapes [:plus :circle :star :bacon])

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

(defn sls []                                                 ; A shuffled-legal-start for testing purposes.
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
