var playerPic=document.createElement("img");
var computerPic=document.createElement("img");
var ballPic=document.createElement("img");
var terrainPic=document.createElement("img");


var picsToLoad=0;

function countImagesAndLaunchIfReady(){
	
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0){
		imageLoadingDoneSoStartGame();
		
	}	
}

function beginLoadingImage(imgVar, fileName){
	imgVar.onload=countImagesAndLaunchIfReady();
	imgVar.src="images/"+fileName+".png";
	
}


function loadImages(){
	
	var imageList=[
		{varName: playerPic, theFile: "Paddle1"},
		{varName: computerPic, theFile: "Paddle2"},
		{varName: terrainPic, theFile: "Terrain2"},
		{varName: ballPic, theFile: "Ball"}
		];
	
	picsToLoad=imageList.length;
	
	for(var i=0; i<imageList.length; i++){
		if(imageList[i].varName!=undefined){
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		}
		else{
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
		}
	}
}

