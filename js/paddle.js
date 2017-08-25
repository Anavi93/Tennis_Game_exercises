var paddle1Y=250;
var paddle2Y=250;
const PADDLE_HEIGHT=80;
const PADDLE_THICKNESS=10;

function computerMovement(){
	var paddle2YCenter=paddle2Y+PADDLE_HEIGHT/2;
	if(paddle2YCenter<ballY-35)
		paddle2Y += 10;
	if(paddle2YCenter>ballY+35)
		paddle2Y -= 10;
	
}

function paddlesDraw(){
	//crtamo prvog igraca, buhahahaha
	//colorRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');
	canvasContext.drawImage(playerPic,0,paddle1Y);
	//crtamo AI igraca
	//colorRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');
	canvasContext.drawImage(computerPic,canvas.width-PADDLE_THICKNESS,paddle2Y);

}