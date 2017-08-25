var canvas;
var canvasContext;

var player1Score=0;
var player2Score=0;

const WINNING_SCORE=11;

var showingWinScreen=false;

window.onload=function(){
	canvas=document.getElementById('gameCanvas');
	canvasContext=canvas.getContext('2d');
	var framesPerSecond=30
	setInterval(function() {
			moveEverything();
			drawEverything();
	},1000/framesPerSecond);
	
	canvas.addEventListener('mousedown',handleMouseClick);
	
	canvas.addEventListener('mousemove', 
			function(evt){
					var mousePos=calculateMousePos(evt);
					paddle1Y=mousePos.y-(PADDLE_HEIGHT/2);
	})
	
}

function moveEverything(){
		if(showingWinScreen)
			return;
	    computerMovement();
		ballMove();
		
}

function drawNet(){
	for(var i=0; i<canvas.height; i+=40){
		colorRect(canvas.width/2-1,i,2,20,'white');
	}
}


function drawEverything(){
	//sledeca linija ispunjava ekran crninom
	colorRect(0,0,canvas.width,canvas.height,'black');
	//ako je ispunjen uslov za pobedu ispisi ko je pobednik i cekaj klik
	if(showingWinScreen){
		canvasContext.fillStyle='white';
		if(player1Score>=WINNING_SCORE){
			canvasContext.fillText('Player 1 won!!!',350,200);
		} 
		else if(player2Score>=WINNING_SCORE){
			canvasContext.fillText('Player 2 won!!!',350,200);
		}
		canvasContext.fillText('click to continue',350,500);
		return;
		}
	//crtamo mrezu
	drawNet();
	//crtamo igrace
	paddlesDraw();
	//crtamo lopticu
	ballDraw();
	//ispisujemo text
	canvasContext.fillText('Player 1',100,100);
	canvasContext.fillText('Player 2',canvas.width-130,100);
	canvasContext.fillText(player1Score,115,115);
	canvasContext.fillText(player2Score,canvas.width-115,115);
}
