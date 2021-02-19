(ns ^:figwheel-hooks telepathic.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [cljs.pprint :refer [pprint]]
   [telepathic.logic :refer [condition-cards colors shapes initiate-actions sls asset-name]]))

(println "This text is printed from src/telepathic/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:color-player (condition-cards colors)
   :shape-player (condition-cards shapes)
   :board (sls)
   :actions (initiate-actions)
   }))

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   [:h1 (pprint @app-state)]
   [:h3 "Edit this in src/telepathic/core.cljs and watch it change!"]
   [:table (map (fn [row] [:tr (map (fn [card] [:td [:img {:src (str "/images/" (asset-name card ))
                                                           :class "card-image"}]]) row)])
                                    (partition 4 (:board @app-state)))]])

(defn mount [el]
  (rdom/render [hello-world] el))

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
