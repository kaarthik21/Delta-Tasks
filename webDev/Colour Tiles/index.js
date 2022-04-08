//For each block
class Cell{
    constructor(rg,x,y,color){
        this.grid = rg;
        this.x = x;
        this.y = y;
        this.color = color;
        // this -> refers to the object it belongrid_size to
    }
    render(){
        this.grid.fillCell(this);
    }
}

//Gameboard, For 5x5 board
class GameBoard{
    constructor(rg){
        this.grid = rg;
        this.cells = []; // Empty Array
        this.empty = {}; // Empty Object
        this.buildGameBoard();
    }

    buildGameBoard(){ 
    // Adding colours yo skeleton grid
        let colors = ['#FFFFFF','#FF0000','#00FF00','#0000FF','#FFFF00','#00FFFF'];
    
        let ap = [];
        for(let cell_index=0;cell_index<this.grid.grid_size+1;cell_index++){
            for(let ei=0;ei<this.grid.grid_size-1;ei++){
                ap.push(colors[cell_index]);
            }
        }
        ap.push(false);

        for(let x = 0;x<this.grid.grid_size;x++){
            this.cells[x] = [];
            for(let y=0;y<this.grid.grid_size;y++){
                let piece_index = Math.random() * ap.length | 0;
                this.cells[x][y] = new Cell(this.grid,x,y,ap[piece_index]);
                if(ap[piece_index]==false)this.empty = this.cells[x][y];
                ap.splice(piece_index,1);
            }
        }
    }

    getEmptyCell(){
        return this.empty;
    }

    render(){
        for(let x=0;x<this.grid.grid_size;x++){
            for(let y=0;y<this.grid.grid_size;y++){
                this.cells[x][y].render();
            }
        }
    }
}


// Build grid, For 5x5 board
class Rendergrid{
    constructor(grid_size,cell_size,parent){
        this.grid_size = grid_size;
        this.cell_size = cell_size;
        this.parent = parent;
        this.grid = [];
        this.buildGrid();
    }

    buildGrid(){
    // Creates empty skeleton grid    
        for(let x=0;x<this.grid_size;x++){
            this.grid[x] = [];
            // Making all empty grids
            for(let y=0;y<this.grid_size;y++){
                let dom = document.createElement("div");
                dom.setAttribute("class","cell");
                dom.style.width = dom.style.height = this.cell_size +"px";
                dom.style.left=(this.cell_size * x) + "px";
                dom.style.top=(this.cell_size * y) + "px";
                this.parent.appendChild(dom);
                this.grid[x][y] = {dom:dom,color:false};
            }
        }
    }

    fillCell(cell){
        if(this.grid[cell.x] && this.grid[cell.x][cell.y])
            this.grid[cell.x][cell.y].color = cell.color
    }

    render(){
        for(let x=0;x<this.grid_size;x++){
            for(let y=0;y<this.grid_size;y++){
                if(this.grid[x][y].color!=false)
                    this.grid[x][y].dom.style.background = this.grid[x][y].color;
                else
                    this.grid[x][y].dom.style.background = "none";
                this.grid[x][y].color = false;        
            }
        }
    }
}





//Gameboard, For 3x3 board
class GameBoard2{
    constructor(rg){
        this.grid = rg;
        this.cells = [];
        this.empty = {};
        this.buildGameBoard();
    }

    buildGameBoard(){
        let colors = ['#FFFFFF','#FF0000','#00FF00','#0000FF','#FFFF00','#00FFFF'];
    
        let ap = [];
        for(let cell_index=0;cell_index<6;cell_index++){
            for(let ei=0;ei<3;ei++){
                ap.push(colors[cell_index]);
            }
        }
            
        for(let x = 0;x<this.grid.grid_size;x++){
            this.cells[x] = [];
            for(let y=0;y<this.grid.grid_size;y++){
                let piece_index = Math.random() * ap.length | 0;
                this.cells[x][y] = new Cell(this.grid,x,y,ap[piece_index]);
                ap.splice(piece_index,1);
            }
        }


    }

    getEmptyCell(){
        return this.empty;
    }

    render(){
        for(let x=0;x<this.grid.grid_size;x++){
            for(let y=0;y<this.grid.grid_size;y++){
                this.cells[x][y].render();
            }
        }
    }
}


// Build grid, For 3x3 grid
class Rendergrid2{
    constructor(grid_size,cell_size,parent){
        this.grid_size = grid_size;
        this.cell_size = cell_size;
        this.parent = parent;
        this.grid = [];
        this.buildGrid();
    }

    buildGrid(){
        for(let x=0;x<this.grid_size;x++){
            this.grid[x] = [];
            for(let y=0;y<this.grid_size;y++){
                let dom = document.createElement("div");
                dom.setAttribute("class","cell");
                dom.style.width = dom.style.height = this.cell_size +"px";
                dom.style.left=(this.cell_size * x) + "px";
                dom.style.top=(this.cell_size * y) + "px";
                this.parent.appendChild(dom);
                this.grid[x][y] = {dom:dom};
                
            }
        }
    }

    fillCell(cell){
        if(this.grid[cell.x] && this.grid[cell.x][cell.y])
            this.grid[cell.x][cell.y].color = cell.color
    }

    render(){
        for(let x=0;x<this.grid_size;x++){
            for(let y=0;y<this.grid_size;y++){
                this.grid[x][y].dom.style.background = this.grid[x][y].color;
            }    
        }
    }
}




//Set Variables
let biggrid = 5;
let smallgrid = 3;
let win = false;
let moves = 0;
let score = 0;

//Timer
let timer_dom = document.getElementById("timer");
let last_time = 0;
let timer = 0;
let delta_time = 0;
let minutes = 0;
let seconds = 0;

//Playerboard(5x5)
let player_board = document.getElementById("player_board");
let rg = new Rendergrid(biggrid,50,player_board); // Empty skeleton grid, (rg - render grid)
let gb = new GameBoard(rg); // Add colors to empty skeleton grid, (gb - game board)
let empty = gb.getEmptyCell();

//Patternboard(3x3)
let pattern_board = document.getElementById("pattern_board");
let pg = new Rendergrid2(smallgrid,40,pattern_board); // Empty skeleton grid, (pg - pattern grid)
let pb = new GameBoard2(pg); // Add colors to empty skeleton grid, (pb - pattern board)


    
function loop(time){
    delta_time += time-last_time;
    last_time = time;
    if(delta_time>1000){
        delta_time-=1000;
        timer++;
        seconds++;
    }
    if(seconds>60)seconds = 0;
    minutes = timer/60 | 0;
    timer_dom.innerHTML ="<span style = 'font-size:20px'>Timer: </span>" +
    (minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds);


    //function newgame(){}

    //Rendering
    gb.render();
    rg.render();

    pb.render();
    pg.render();

    win = true;
    for(let x=0;x<pg.grid_size;x++){
        for(let y=0;y<pg.grid_size;y++){
            if(gb.cells[x+1][y+1].color!=pb.cells[x][y].color)
                win = false;        
        }
    }

    if(win){
        console.log("you win in "+minutes + " minutes and " +seconds + " seconds");
        document.getElementById("score").innerHTML ="<span style = 'font-size:20px'> Score : </span>" + Math.round((1/Math.sqrt(seconds) + 2/(moves^2))*1000);
        document.getElementById("score").style.color = "black";
        document.getElementById("score").style.fontSize = "20px";
        window.alert("Game over, You solved the puzzle!");
    }
    else    
        requestAnimationFrame(loop); 
}
requestAnimationFrame(loop);

//Moving cells

document.onkeydown = function(e){
    switch(e.which){
        case 37:
        if(gb.cells[empty.x+1]){
            gb.cells[empty.x][empty.y] = new Cell(rg,empty.x,empty.y,gb.cells[empty.x+1][empty.y].color);
            gb.cells[empty.x+1][empty.y] = new Cell(rg,empty.x+1,empty.y,false);
            empty.x++;
        moves = moves+1;
        }
        break;
        case 39:
        if(gb.cells[empty.x-1]){
            gb.cells[empty.x][empty.y] = new Cell(rg,empty.x,empty.y,gb.cells[empty.x-1][empty.y].color);
            gb.cells[empty.x-1][empty.y] = new Cell(rg,empty.x-1,empty.y,false);
            empty.x--;
        moves = moves+1;    
        }
        break;
        case 40:
        if(gb.cells[empty.x][empty.y-1]){
            gb.cells[empty.x][empty.y] = new Cell(rg,empty.x,empty.y,gb.cells[empty.x][empty.y-1].color);
            gb.cells[empty.x][empty.y-1] = new Cell(rg,empty.x,empty.y-1,false);
            empty.y--;
        moves = moves+1;    
        }
        break;
        case 38:
        if(gb.cells[empty.x][empty.y+1]){
            gb.cells[empty.x][empty.y] = new Cell(rg,empty.x,empty.y,gb.cells[empty.x][empty.y+1].color);
            gb.cells[empty.x][empty.y+1] = new Cell(rg,empty.x,empty.y+1,false);
            empty.y++;
        moves = moves+1;    
        } 
        break;
    }
} 
