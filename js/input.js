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