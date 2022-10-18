---
layout: post
title:  "Farnell Synthesis Part 2"
author: Mirea Klee
---

[see the code in action :)](https://miiklee.github.io/farnell-synthesis/)

#### Planning

I was aiming to create a classic dial tone on a telephone. As this is not a particularly complicated sound,
the code to recreate it is equally straightforward. I used the *Designing Sound* general premise as an understanding
of what frequencies were true to life and also for an explanation of a breakdown of the sound.

#### Coding

The actual code is based around 2 oscillators of set frequencies being played simultaneously. The key is in the somewhat
similar frequencies of the 2 oscillators, as well as putting them both through a gain node to bring the overall sound down
somewhat. In *Designing Sound* the diagram given creates two oscillators, adds them together, and then puts that added wave
through a gain node and then into the output. Since the easiest way to do additive synthesis in WebAudio is to connect both
oscillators to the same destination, I halved the gain reccomended in the book so that the overall amplitude would remain consistent.
Then I use a single line of code to pass the oscillator signal through the gain node and directly into the destination -- this line is
obviously repeated twice, once for each oscillator. The result is a pretty accurate dial tone.

I was a bit bored with this implementation, so I threw a bit of a visual surprise in just for my own entertainment. I had originally
intended to go all out with the r2d2 implementation, but found diagrams pretty impenetrable in their use of mathematics and register based
code, and google was of very little help in explaining what the terms meant. In the end I decided that figuring out how to actually
make that happen was not feasible in the time I left for myself to complete this assignment.

#### Audio Signal Graph

![IMG_0811.jpg](https://github.com/miiklee/miiklee.github.io/blob/2fa321d6ef02aa40a90aba5789f31621b3ac0896/_posts/IMG_0811.jpg)
if the image isn't showing up because it's still being weird, it's visible in the [markdown version](https://github.com/miiklee/miiklee.github.io/blob/main/_posts/2022-10-18-weird-sounds.md)
