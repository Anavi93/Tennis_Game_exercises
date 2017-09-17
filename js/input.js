const KEY_LEFT_ARROW=37;
const KEY_UP_ARROW=38;
const KEY_RIGHT_ARROW=39;
const KEY_DOWN_ARROW=40;

const KEY_W=87;
const KEY_D=68;
const KEY_S=83;
const KEY_A=65;

const KEY_1=49;
const KEY_2=50;

var mouseX=0;
var mouseY=0;

var controlKeyFor1Up=KEY_W;
var controlKeyFor1Down=KEY_S;
var controlKeyFor2Up=KEY_UP_ARROW;
var controlKeyFor2Down=KEY_DOWN_ARROW;

var player1UpKey=false;
var player1DownKey=false;
var player2UpKey=false;
var player2DownKey=false;

var twoPlayerMode=true;

function setupInput(){
	
	canvas.addEventListener('mousedown',handleMouseClick);
	canvas.addEventListener('mousemove', 
			function(evt){
					var mousePos=calculateMousePos(evt);
					if(!twoPlayerMode)
						paddle1Y=mousePos.y-(PADDLE_HEIGHT/2);
	});
	document.addEventListener('keydown',keyPressed);
	document.addEventListener('keyup',keyReleased);	

}

function keySet(keyEvent,setTo){

	if(keyEvent.keyCode==controlKeyFor1Up){
		player1UpKey=setTo;
	}
	if(keyEvent.keyCode==controlKeyFor1Down){
		player1DownKey=setTo;
	}
	if(keyEvent.keyCode==controlKeyFor2Up){
		player2UpKey=setTo;
	}
	if(keyEvent.keyCode==controlKeyFor2Down){
		player2DownKey=setTo;
	}
	if(keyEvent.keyCode==KEY_1){
		showingStartMenu=false;
		showingWinScreen=false;
		twoPlayerMode=false;
	}
	if(keyEvent.keyCode==KEY_2){
		showingStartMenu=false;
		showingWinScreen=false;
		twoPlayerMode=true;
	}
		
	
}

function keyPressed(evt){
	evt.preventDefault();
	//console.log("Key pressed "+evt.keyCode);
	keySet(evt,true);

}

function keyReleased(evt){
	//console.log("Key released "+evt.keyCode);
	keySet(evt,false);

}

function calculateMousePos(evt){
	var rect=canvas.getBoundingClientRect();
	var root=document.documentElement;
	var mouseX=evt.clientX - rect.left - root.scrollLeft;
	var mouseY=evt.clientY - rect.top - root.scrollTop;
	return{
		x:mouseX,
		y:mouseY
	};
}

function handleMouseClick(evt){
	if(showingWinScreen){
		player1Score=0;
		player2Score=0;
		showingWinScreen=false;
	}
}