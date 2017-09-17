const PADDLE_HEIGHT=80;
const PADDLE_THICKNESS=10;
const PADDLE_DIST_FROM_EDGE=Math.floor(document.getElementById("gameCanvas").width*0.15);
const PADDLE_SPEED=10;

var paddle1X=PADDLE_DIST_FROM_EDGE;
var paddle2X=document.getElementById("gameCanvas").width-PADDLE_DIST_FROM_EDGE;
var paddle1Y=250;
var paddle2Y=250;

function computerMovement(){
	var paddle2YCenter=paddle2Y+PADDLE_HEIGHT/2;
	if(paddle2YCenter<ballY-35)
		paddle2Y += PADDLE_SPEED;
	if(paddle2YCenter>ballY+35)
		paddle2Y -= PADDLE_SPEED;
	
}

function paddleMove(){
	if(!twoPlayerMode){
		computerMovement();
	}else{
		if(player1UpKey && paddle1Y>0)
			paddle1Y-=PADDLE_SPEED;
		if(player1DownKey && paddle1Y<canvas.height-PADDLE_HEIGHT)
			paddle1Y+=PADDLE_SPEED;
		if(player2UpKey && paddle2Y>0)
			paddle2Y-=PADDLE_SPEED;
		if(player2DownKey && paddle2Y<canvas.height-PADDLE_HEIGHT)
			paddle2Y+=PADDLE_SPEED;
	}
	
}

function paddlesDraw(){
	//crtamo prvog igraca, buhahahaha
	//colorRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');
	canvasContext.drawImage(playerPic,paddle1X,paddle1Y);
	//crtamo AI igraca
	//colorRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');
	canvasContext.drawImage(computerPic,paddle2X-PADDLE_THICKNESS,paddle2Y);

}