const PADDLE_HEIGHT=80;
const PADDLE_THICKNESS=10;
const PADDLE_DIST_FROM_EDGE=Math.floor(document.getElementById("gameCanvas").width*0.15);
const PADDLE_SPEED=6;
const BLOCKED_CORNER_DIST=10;

var paddle1X=PADDLE_DIST_FROM_EDGE;
var paddle2X=document.getElementById("gameCanvas").width-PADDLE_DIST_FROM_EDGE;
var paddle1Y=250;
var paddle2Y=250;


//global variable for ball interception with player2 area
var interY=0;

function computerMovement(){
	var paddle2YCenter=paddle2Y+PADDLE_HEIGHT/2;
	//ball going to player1, computer is repositiong on center
	if(ballSpeedX<0){
	//delete previous interseption point	
	interY=0;	
	if(paddle2YCenter-canvas.height/2<-6)
		paddle2Y += PADDLE_SPEED;
	if(paddle2YCenter-canvas.height/2>6)
		paddle2Y -= PADDLE_SPEED;
	}
	//ball going to computer controled paddle
	if(ballSpeedX>0){
		//if we don't have interception point calculate new one
		if(interY==0){
			var m1=Math.abs(ballSpeedY)/ballSpeedX*1.0;
			var distanceY;
			var distanceX=canvas.width-PADDLE_DIST_FROM_EDGE-ballX;
			if(ballSpeedY>0)
				distanceY=canvas.height-ballY;
			if(ballSpeedY<0)
				distanceY=ballY;
			var m=distanceY/distanceX;
			//there won't be more bouncing of the wall
			if(m>m1)
				interY=ballY+(distanceX/ballSpeedX)*ballSpeedY;
			//there will be bouncing
			else if(m<m1){
				var k=distanceX/ballSpeedX;
				var k1=Math.abs(distanceY/ballSpeedY);
				if(ballSpeedY>0)
					interY=canvas.height-(k-k1)*ballSpeedY;
				if(ballSpeedY<0)
					interY=(k-k1)*(-ballSpeedY);
			}
			//randomizing expected interception so the AI can sometimes make a mistake
			interY=interY-50+Math.random()*100;
		}
		if(paddle2YCenter-10<interY && paddle2Y<canvas.height-PADDLE_HEIGHT-BLOCKED_CORNER_DIST)
			paddle2Y += PADDLE_SPEED;
		if(paddle2YCenter+10>interY && paddle2Y>BLOCKED_CORNER_DIST)
			paddle2Y -= PADDLE_SPEED;
	}
	
}

function paddleMove(){
	if(!twoPlayerMode){
		computerMovement();
	}else{
		if(player1UpKey && paddle1Y>BLOCKED_CORNER_DIST)
			paddle1Y-=PADDLE_SPEED;
		if(player1DownKey && paddle1Y<canvas.height-PADDLE_HEIGHT-BLOCKED_CORNER_DIST)
			paddle1Y+=PADDLE_SPEED;
		if(player2UpKey && paddle2Y>BLOCKED_CORNER_DIST)
			paddle2Y-=PADDLE_SPEED;
		if(player2DownKey && paddle2Y<canvas.height-PADDLE_HEIGHT-BLOCKED_CORNER_DIST)
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