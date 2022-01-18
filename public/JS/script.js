const cols = 60;
const rows = 40;
const size = 15; //length and width

function setup() {
    // height, width of canvas
    createCanvas(cols*size,rows*size);
    //cannot declare var gameStarted (want global)
    
    const buttonStart = createButton("Start Life");
    const buttonPause = createButton("Pause");
    gameStarted = false;
    buttonStart.mousePressed(() => {
        gameStarted = true;
    });
    paused = false;
    buttonPause.mousePressed(() => {
        paused = true;
    });
    // cells = makeRandomCellsGrid(rows, cols);
    cells = getUserCellsGrid(rows, cols);
    
}
function makeRandomCellsGrid(rows, cols) {
    //initialize 2D array
    cells = new Array(cols);
    for (let i=0; i<cells.length; i++) {
        cells[i] = new Array(rows);
    }
    for (let i=0; i < cols; i++) {
        for(let j=0; j<rows; j++) {
            cells[i][j] = floor(random(2));
        }
    }
    return cells;
}

function getUserCellsGrid(rows, cols) {
    //initialize 2D array of zeros
    cells = new Array(cols);
    for (let i=0; i<cells.length; i++) {
        cells[i] = new Array(rows);
    }
    for (let i=0; i < cols; i++) {
        for(let j=0; j<rows; j++) {
            cells[i][j] = 0;
        }
    }
    return cells;
}

function draw(){
    background(0);
    stroke(0);
    update();
    checkButtons();
    if(gameStarted) {
        //get next state
        setNextState(cells);
        wait(10); // input: Hz frequency
        
    }
    if (paused) {
        
        paused = false;
        noLoop();
    } 


    function update() {
        // rect(from left, from top, width, length)
        for (let i =0; i<cols; i++) {
            for (let j=0; j<rows; j++) {
                let fromLeft = i*size;
                let fromTop = j*size;
                //scale: 0 is black, 256 is white
                // can also do rgb
                if(cells[i][j]) {
                    fill(20, 40, 145);                    
                } else {
                    fill(100);
                }
                rect(fromLeft, fromTop, size, size);
            }
        }
    }
}

function checkButtons() {

}
function checkMouseInbounds() { //unused and untested
    const x = mouseX;
    const y = mouseY;
    return (x>=0 && x<= cols*size && y>=0 && y>=rows*size);
}
function mousePressed() {
    locked = true; //pressing the mouse
    if (locked) {
        const fromTop = floor(mouseY/size); //distance from top
        const fromLeft = floor(mouseX/size); // distance from left
        cells[fromLeft][fromTop] = !cells[fromLeft][fromTop];
        //console.log(mouseX, mouseY);
    }
}


function mouseReleased() {
    locked = false;
}

function mouseDragged() {
    if (locked ) {
        const fromTop = floor(mouseY/size); //distance from top
        const fromLeft = floor(mouseX/size); // distance from left
        cells[fromLeft][fromTop] = 1; // set alive
    }
  }

function wait(frequency) {
    let period = (1000/frequency); // period in ms
    start = millis();
    do {
        current = millis();
    } while (current - start < period);
}

function setNextState(cells) {
    // the logic of Convay's game of life
    //input: cells, 2D binary array
    //return type: null. The cells array is modified in-place

    //cells has two bits:
    //LSB is the cur state, MSB is the next state
    // table summarizing the meaning of each 2-bit number in cells[i][j]
    // state   |
    // bin  dec| next   cur
    // ----------------------
    // 0 == 00 | dead  dead
    // 1 == 01 | dead  alive
    // 2 == 10 | alive dead
    // 3 == 11 | alive alive 
    for (let i =0; i < cells.length; i++) {
        for(let j=0; j<cells[0].length; j++) {
            var count = checkNeighbours(cells, i, j);
            if (cells[i][j] == 1) {
                //currently alive
                if (count < 2 || count > 3) {
                    //live cell dies: 1 -> 01
                    continue;
                } else {
                    //live cell stays alive: 1 -> 11
                    cells[i][j] = 3;
                }
            } else {
                if (count == 3) {
                    // dead cell is revived: 0 -> 10
                    cells[i][j] = 2;
                }
            } 
        }
    }
    // get next state
    for (let i=0; i<cells.length; i++) {
        for (let j=0; j<cells[0].length; j++) {
            cells[i][j] >>= 1; //get MSB only as next state
        }
    }
    //cannot do arrowfunction here: they must be predefined in script!
    function checkNeighbours(cells, y, x) {
        var count = 0;
        for (let i = Math.max(y-1,0); i < Math.min(y+2,cells.length); i++) {
            for(let j=Math.max(x-1,0); j<Math.min(x+2,cells[0].length); j++) {
                if (i==y && j==x)
                    continue;
                count += cells[i][j] & 1; // get LSB (cur state) 
            }  
        }
        return count;
    };
}

// function mousePressed() {
//     noLoop();
// }
  
// function mouseReleased() {
//     loop();
// }