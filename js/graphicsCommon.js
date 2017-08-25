function colorCircle(centerX,centerY,radius,drawColor){
	canvasContext.fillStyle=drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY,radius,0, Math.PI*2,true);
	canvasContext.fill();
}
function colorRect(leftX,topY, width,height,drawColor){
	canvasContext.fillStyle=drawColor;
	canvasContext.fillRect(leftX,topY,width,height);
}

function drawBitmapCentered(useBitmap,atX,atY){
	canvasContext.save();
	canvasContext.translate(atX,atY);
	canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
	canvasContext.restore();
}