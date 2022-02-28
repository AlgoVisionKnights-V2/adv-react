import React from "react";
import * as d3 from "d3";
import "./nqueens.css";

function randInRange(lo, hi) {
  return Math.floor(Math.random() * (hi - lo)) + lo;
}

class EmptyStep {
  forward() {}
  backward() {}


}

class VisibilityStep{
  constructor( rowID,colID, visible,hidden){
    this.rowID = rowID;
    this.colID = colID;
    this.visible = visible;
    this.hidden = hidden;
  }

  forward(){
    
    
    d3.select("#code"+ this.rowID + this.colID).attr("visibility",this.visible);


    
  }

  backward(){

   
    d3.select("#code"+ this.rowID + this.colID).attr("visibility",this.hidden);

    
  }
}



export default class Queens extends React.Component {

  	constructor(props) {
		super(props);

		this.state = {
      n: 0,
      row: 0,
      col: 0,
      board: [],
			size: 10,
			steps: [],
			ids: [],
			messages: [],
			running: false,
			stepId: 0,
			stepTime: 300,
			waitTime: (9 * 2000) / 8
		};

		this.ref = React.createRef();
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.restart = this.restart.bind(this);
		this.backward = this.backward.bind(this);
		this.forward = this.forward.bind(this);
		this.turnOffRunning = this.turnOffRunning.bind(this);
		this.run = this.run.bind(this);
	}
  
  initialize(){

    let n = randInRange(4, 7);

      const queen = {
        name: "Black Queen",    
        code: "\u265B",
    };


    const size = 100, matrix = size*n;

    console.log(matrix);

    const div = d3.select(this.ref.current);

    const svg = div.append("svg")
                    .attr("width", matrix + "px")
                    .attr("height",matrix + "px");


    for( var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){


            const tile = svg.append("rect")
            .attr("x", i * size)
            .attr("y", j * size)
            .attr("width", size + "px")
            .attr("height",size + "px");



            if ((i+j)%2===0){
                tile.attr("fill", "#d55e00");
            }


            else {
                tile.attr("fill", "#f0e442");
            }

 


            
            const piece = svg.append("text")
                .style("font-size", size*(4/5)+"px")
                .attr("text-anchor","middle")
                .attr("x", i * size)
                .attr("y", j * size)
                .attr("dx", size / 2)
                .attr("dy", size * 4/5);
                
                
                piece.attr("id", "code" + j + i)
                .classed('team1', true)
                .text(queen.code)
                .attr("visibility", "hidden");
                ;
                    
                

            }
        }
this.setState({ n : n});
  }

nqueens(board,col,row,n){

var steps = [];

var stepBuffer = [];

var messages = [];

    function createMessage(msg) {
      currentMessage = "<h1>" + msg + "</h1>";
    }

function flushBuffer(){
        if (stepBuffer.length == 0) return;
      steps.push(stepBuffer);
      stepBuffer = [];
      messages.push(currentMessage);
}

       function addStep(step) {
      stepBuffer.push(step);
    }

var currentMessage = "";

    addStep(new EmptyStep());
    createMessage("The objective is to find the squares of the chess board where the queens do not hit.");
    flushBuffer();

function solveNQ(board,col){

  if(col >= n){

      addStep(new EmptyStep());
    createMessage("nQueens completed");
    flushBuffer();
        return true;
    }

    for(var i = 0; i < n; i++){

                addStep(
                new VisibilityStep(
                    i,
                    col,
                    "visible",
                    "hidden"
              ));
              createMessage("Queen: Row " + (i +1 ) + " Column "+ (col+1));
              flushBuffer();
               

        
        if(queenHit(board,i,col,n))
        {
          

            board[i][col] = 1;



            if(solveNQ(board,col+1,n)==true){
             
              
                return true;
            }

                            
            board[i][col] = 0;
        }


             
            


            flushBuffer();
            addStep(
                new VisibilityStep(
                    i,
                    col,
                    "hidden",
                    "visible"
              ));
              createMessage("Backtracking... ");
              flushBuffer();

    }


                  

    return false;
}

 


  function queenHit(board, row, col,n){
    for(var i= 0; i<col;i++){


        if(board[row][i]==1){


              addStep(new EmptyStep());
              createMessage("Queen (" + (row+1)+ " , "+ (i+1)+") is in range.");
              flushBuffer();
     
            return false;
        }
    }

    for(var i = row, j =col; i>=0 &&j>=0; i--,j--){
        if(board[i][j]==1){


              addStep(new EmptyStep());
              createMessage("Queen (" + (i+1)+ " , "+ (j+1)+") is in range.");
              flushBuffer();
            return false;
        }
    }

    for(var i = row, j =col; j>=0 && i < n; i++,j--){
        if(board[i][j]==1){


            addStep(new EmptyStep());
            createMessage("Queen (" + (i+1)+ " , "+ (j+1)+") is in range.");
            flushBuffer();
            return false;
        }
    }
    
              addStep(new EmptyStep());
              createMessage("No queens are in range.");
              flushBuffer();
              return true;

}

function NQ(){



    const board = new Array(n);

    for(var i = 0; i < n;i++){

        board[i] = new Array(n);
    }

    for(var i = 0;i<n;i++){
        for(var j = 0;j<n;j++)
        {
            board[i][j] = 0;
        }

    }

    console.log(board);

    if(solveNQ(board, 0)==false){
        console.log("");
        return false;
    }

 
    return true;


}

 NQ();




this.setState({ steps: steps, messages: messages });

}

turnOffRunning() {
  this.setState({running: false});
 
  }

  forward() {

    console.log("FORWARD CLICKED");
    if (this.state.running) return;
    if (this.state.stepId === this.state.steps.length) return;

    document.getElementById("message").innerHTML = this.state.messages[this.state.stepId];
    for (const step of this.state.steps[this.state.stepId]) step.forward();
    console.log(this.state.steps[this.state.stepId]);
    this.setState({ stepId: this.state.stepId + 1 });
    d3.timeout(this.turnOffRunning, this.state.waitTime);

  }

  backward() {

    console.log("BACKWARD CLICKED");
    if (this.state.running) return;
    if (this.state.stepId - 1 < 0) return;

    var stepId = this.state.stepId;
    document.getElementById("message").innerHTML = this.state.messages[stepId - 1];
    for (const step of this.state.steps[stepId - 1]) step.backward();
  
    this.setState({ stepId: stepId - 1 });
    d3.timeout(this.turnOffRunning, this.state.waitTime);

  }

  run() {

    if (!this.state.running) return;
    if (this.state.stepId === this.state.steps.length) {
      this.setState({ running: false });
      return;
    }
   

    document.getElementById("message").innerHTML = this.state.messages[this.state.stepId];
    for (const step of this.state.steps[this.state.stepId]) step.forward();

    this.setState({ stepId: this.state.stepId + 1 });
    d3.timeout(this.run, this.state.waitTime);
  
  }

  play() {

    console.log("PLAY CLICKED");
    if (this.state.running) return;
    this.setState({ running: true });
    this.run();
   
  }

  pause() {

    console.log("PAUSE CLICKED");
    this.setState({ running: false });

  }

  restart() {

    console.log("RESTART CLICKED");
    if (this.state.stepId - 1 < 0) return;

    var stepId = this.state.stepId;
 
    document.getElementById("message").innerHTML = this.state.messages[0];
    while (stepId - 1 >= 0) {
      for (const step of this.state.steps[--stepId]) step.backward();
      
      d3.timeout(this.turnOffRunning, this.state.waitTime);
    }

    this.setState({ running: false });
    this.setState({ stepId: 0 });
 
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps, prevState) {
        if (this.state.n !== prevState.n) {
      console.log("SIZE CHANGED");
      this.nqueens(this.state.board, this.state.col,this.state.row,this.state.n);
    }

    else if (this.state.running !== prevState.running) {
      this.run();
      console.log("We ran");
   }

  }
  

	  render() {
	  	return (
	  		<div>
	  			<div class="center-screen" id="banner">
		  			<button onClick={this.play}>Play</button>
		  			<button onClick={this.pause}>Pause</button>
			  		<button onClick={this.restart}>Restart</button>
				  	<button onClick={this.backward}>&lt;</button>
					  <button onClick={this.forward}>&gt;</button>
			  	</div>
			  	<div class="center-screen" id="message-pane"><span id="message"><h1>Welcome to nQueens!</h1></span></div>
			  	<div ref={this.ref} class="center-screen"></div>
			  </div>
		  );
	  }
  
}