var ballX=50;
var ballSpeedX=12;
var ballY=50;
var ballSpeedY=4;
const START_HOR_SPEED=12;
const MIN_VER_SPEED=5;
const MAX_VER_SPEED=9;

var hitsTaken=0;

function ballReset(){
	if(player1Score>=WINNING_SCORE || player2Score>=WINNING_SCORE){
		showingWinScreen=true;
	}
	ballSpeedY=Math.random()*(MAX_VER_SPEED-MIN_VER_SPEED)+MIN_VER_SPEED;
	if(Math.random()>0.5){
	ballSpeedY=-ballSpeedY;	
	}
	ballSpeedX=-ballSpeedX/Math.abs(ballSpeedX)*START_HOR_SPEED;
	ballX=canvas.width/2;
	ballY=canvas.height/2;
	hitsTaken=0;
}

function ballMove(){
ballX = ballX + ballSpeedX;
		ballY = ballY + ballSpeedY;

		if(ballX<0)
			if(ballY>paddle1Y && ballY<paddle1Y+PADDLE_HEIGHT){
				ballSpeedX=-ballSpeedX;
				var deltaY=ballY-(paddle1Y+PADDLE_HEIGHT/2);
				ballSpeedY=deltaY*0.35;
				hitsTaken++;
				if(hitsTaken==4){
					ballSpeedY=ballSpeedY*1.45;
					ballSpeedX=ballSpeedX*1.45;
				}
				if(hitsTaken==12){
					ballSpeedY=ballSpeedY*1.7;
					ballSpeedX=ballSpeedX*1.7;
				}
			}
			else{
			//mora biti ispred reset-a da bismo mogli da postavimo win condition
				player2Score++;
				ballReset();
			}
		if(ballX>canvas.width-5)
			if(ballY>paddle2Y && ballY<paddle2Y+PADDLE_HEIGHT){
				ballSpeedX=-ballSpeedX;
				var deltaY=ballY-(paddle2Y+PADDLE_HEIGHT/2);
				ballSpeedY=deltaY*0.35;	
				hitsTaken++;
				if(hitsTaken==4){
					ballSpeedY=ballSpeedY*1.45;
					ballSpeedX=ballSpeedX*1.45;
				}
				if(hitsTaken==12){
					ballSpeedY=ballSpeedY*1.7;
					ballSpeedX=ballSpeedX*1.7;
				}
			}
			else{
				player1Score++;
				ballReset();
			}
		if(ballY<0)
			ballSpeedY=-ballSpeedY;
		
		if(ballY>canvas.height-5)
			ballSpeedY=-ballSpeedY;
}

function ballDraw(){
	//crtamo lopticu
	colorCircle(ballX,ballY,10,'white');
}