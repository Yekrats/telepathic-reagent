# telepathic-reagent

ClojureScript implementation of Carl Klutzke's "Telepathic" https://AreYouTelepathic.com

## Overview

<img src="https://i.imgur.com/BuSHFpY.png" alt="Image of the board game 'Telepathic'" width="400"/>

This is an attempt to develop the card game "Telepathic" in a ClojureScript environment.
Though the game is still in development, most of the game is implemented through hot-seat play.

## Development

To get an interactive development environment run:

    lein fig:build

This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

	lein clean

To create a production build run:

	lein clean
	lein fig:min


## License

Copyright © 2021 

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
