var canvas;
var canvasContext;

var player1Score=0;
var player2Score=0;

const WINNING_SCORE=11;

var showingStartMenu=true;
var showingWinScreen=false;

window.onload=function(){
	canvas=document.getElementById('gameCanvas');
	canvasContext=canvas.getContext('2d');
	
	canvasContext.fillText("LOADING IMAGES", canvas.width/2, canvas.height/2);
	
	loadImages();
		
}

function imageLoadingDoneSoStartGame(){
	var framesPerSecond=30;
	setInterval(function() {
			moveEverything();
			drawEverything();
	},1000/framesPerSecond);
	
	setupInput();
}

function moveEverything(){
		if(showingWinScreen)
			return;
	    paddleMove();
		ballMove();
		
}

function drawNet(drawX,drawColor){
	for(var i=0; i<canvas.height; i+=40){
		colorRect(drawX-1,i,2,20,drawColor);
	}
}

function drawEverything(){
	//sledeca linija ispunjava ekran crninom
	colorRect(0,0,canvas.width,canvas.height,'black');
	canvasContext.drawImage(terrainPic,0,0);

	//ako je ispunjen uslov za pobedu ispisi ko je pobednik i cekaj klik
	if(showingWinScreen){
		canvasContext.fillStyle='white';
		if(player1Score>=WINNING_SCORE){
			canvasContext.fillText('Player 1 won!!!',370,200);
		} 
		else if(player2Score>=WINNING_SCORE){
			canvasContext.fillText('Player 2 won!!!',370,200);
		}
		canvasContext.fillText('Move paddles with mouse or keys and hit ball every time',275,250);
		canvasContext.fillText('press 1 for single player and 2 for two-player mode',285,350);
		return;
		}
	if(showingStartMenu){
		canvasContext.fillStyle='white';
		canvasContext.fillText('Move paddles with mouse or keys and hit ball every time',275,250);
		canvasContext.fillText('press 1 for single player and 2 for two-player mode',285,350);
		return;
	}
	//crtamo mrezu
	drawNet(canvas.width/2,'white');
	drawNet(paddle1X,'black');
	drawNet(paddle2X, 'black');
	//crtamo igrace
	paddlesDraw();
	//crtamo lopticu
	ballDraw();
	//ispisujemo text
	canvasContext.fillStyle='white';
	canvasContext.fillText('Player 1',150,100);
	canvasContext.fillText('Player 2',canvas.width-180,100);
	drawBlockyNumber(player1Score,160,115);
	drawBlockyNumber(player2Score,canvas.width-170,115);
}
