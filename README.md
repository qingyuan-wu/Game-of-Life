# :chipmunk: Game of Life

A visualizer for Conway's [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). Customize and start your cell life today! Live site coming soon...

## :books: Rules
There is an arbitrarily-sized (or inifite) grid of cells that is either dead or alive. At the next cycle, each cell may change its livelihood based on these simple rules:

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation;
2. Any live cell with two or three live neighbours lives on to the next generation;
3. Any live cell with more than three live neighbours dies, as if by overpopulation;
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

[Source](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
## :star: Features
* Large 40 by 60 grid
* Quick and easy setup - *drag* to select multiple cells
* Dynamic addition of individual cells after the start of the simulation
* Pause button

## :soon: Coming Soon
* Colour, grid size, and board size **customization**
* Simulation update **frequency customization**
* Choice to start with well-studied, **cool patterns**
* Choice to **build your own circuit** using your Life, by including logic gates
* More **user-friendly design**!!
* Infinite universe option

## :brain: The Logics and Implmenetation
* This program uses a space-efficient, in-place 2-bit state matrix to store the current and next state (each one bit) at each iteration.
* Look at `script.js` in `JS` for details on the logic. The code is realtively thoroughly explained.
* The GUI was powered by the `P5.js` library, available [here](https://p5js.org/).
## :eyeglasses: Demo
Stay tuned for the live site, the best demo possible :)

Start of an amazing Life:
![](Demo-Images/start.PNG)

After a short while:
![](Demo-Images/end.PNG)

## Common Shapes
Eventually there will be a feature for common shapes to be selected at the start of a Life.
### Projectiles
Glider:

![](Demo-Images/glider.PNG)

### Still Lives
Beehive (lively stable):

![](Demo-Images/beehive.PNG)

Block (unstable):

![](Demo-Images/block.PNG)

### Oscillators
Blinker (period 2):

![](Demo-Images/blinker.PNG)

Toad (period 2):

![](Demo-Images/toad.PNG)

Penta-Decathlon (period 15):

![](Demo-Images/penta-decathlon.PNG)

## :fleur_de_lis: Credits
Thank you Regis Zhao for giving me this cool idea. York Mills for life.

## :fax: Reach out
Got any cool ideas? Send me an e-mail! `qyw.wu@mail.utoronto.ca`