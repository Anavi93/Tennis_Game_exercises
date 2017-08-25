var canvas;
var canvasContext;

var player1Score=0;
var player2Score=0;

const WINNING_SCORE=11;

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

function drawNet(){
	for(var i=0; i<canvas.height; i+=40){
		colorRect(canvas.width/2-1,i,2,20,'white');
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
		canvasContext.fillText('click to continue',365,400);
		return;
		}
	//crtamo mrezu
	drawNet();
	//crtamo igrace
	paddlesDraw();
	//crtamo lopticu
	ballDraw();
	//ispisujemo text
	canvasContext.fillText('Player 1',150,100);
	canvasContext.fillText('Player 2',canvas.width-180,100);
	canvasContext.fillText(player1Score,165,115);
	canvasContext.fillText(player2Score,canvas.width-165,115);
}
