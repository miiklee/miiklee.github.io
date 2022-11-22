---
layout: post
title:  "Automated Composition"
author: Mirea Klee
---
see the code in action :)

[magenta synth](https://miiklee.github.io/magenta-synth/)

[game of life](https://miiklee.github.io/game-of-life/)


The game of life is a cellular automaton created by Mathemetician John Conway where on a grid cells can live and die. The rules are as follows:

1. a dead cell is alive in the next generation if it has 3 live neighbors right now
2. a live cell dies if it has anything other than 2 or 3 live neighbors right now

In order to use my implementation, click on any square to change it's life-status and then click "play" to see what the next generation is with those cells as live. At any point click the "play music" button and the notes mapped to the live keys will simultaneously. 

While writing the code for this I got a lot more familiar with the actual rules behind the game of life, and also the general process involved with setting up rules for something to follow under a plethora of situations. As a CS major this is a concept I already had to struggle to get comfortable with -- the idea of coding for any eventuality and any edge cases, so that was pretty easy to apply to this case. 

Once I had a basic front-end interface figured out and working, I moved on to adding sound to work alongside it. My basic idea was if each box corresponds to a different note, then any live ones can play simultaneously creating a different sound for each generation or combination of alive boxes. To do this I used my code from writing a keyboard earlier in the semester and mapped the id encoding of each square to a frequency from low notes at the top to high notes at the bottom. I then had to organize it so each time "play music" was clicked, oscillators and gain nodes would be created for each live box and their gains would be scaled to reduce clipping with the number of notes, while maintaining an even volume no matter the combination. I then had to modify the way I implemented the decay aspect of a note because all notes needed to last together and not have the ending triggered by a separate event. This meant I had to switch from a ramping value to a set target at time, to give myself a start time variable, but then I modified the time constant parameter to allow it to still gradually come to an end instead of an abrupt stop.




