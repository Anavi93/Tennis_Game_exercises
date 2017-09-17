//distance between digits
const OFFSET=2;
//dimensions of vertical line
const H_LINE_W=8;
const H_LINE_H=2;
//dimentsion of horisontal line
const V_LINE_W=2;
const V_LINE_H=8;
//dimensions of digit
const NUM_W=2*V_LINE_W+H_LINE_W;
const NUM_H=3*V_LINE_H+2*H_LINE_H;

function drawBlockyDigit(x,y,n){
	//for displaying digit we need 7 lines, their positions inside a digit square are saves in two arrays
	var xs=[V_LINE_W,0,V_LINE_W+H_LINE_W,V_LINE_W,0,V_LINE_W+H_LINE_W,V_LINE_W];
	var ys=[0,H_LINE_H,H_LINE_H,H_LINE_H+V_LINE_H,2*H_LINE_H+V_LINE_H,2*H_LINE_H+V_LINE_H,2*H_LINE_H+2*V_LINE_H];
	var isHor=[1,0,0,1,0,0,1];
	
	if(n==0){
		colorRect(x+xs[0],y+ys[0], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[1],y+ys[1], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[2],y+ys[2], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[4],y+ys[4], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[5],y+ys[5], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[6],y+ys[6], H_LINE_W,H_LINE_H,'white');
	}
	if(n==1){
		colorRect(x+xs[2],y+ys[2], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[5],y+ys[5], V_LINE_W,V_LINE_H,'white');
	}
	if(n==2){
		colorRect(x+xs[0],y+ys[0], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[2],y+ys[2], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[3],y+ys[3], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[4],y+ys[4], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[6],y+ys[6], H_LINE_W,H_LINE_H,'white');
	}
	if(n==3){
		colorRect(x+xs[0],y+ys[0], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[2],y+ys[2], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[3],y+ys[3], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[5],y+ys[5], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[6],y+ys[6], H_LINE_W,H_LINE_H,'white');
	}
	if(n==4){
		colorRect(x+xs[1],y+ys[1], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[2],y+ys[2], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[3],y+ys[3], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[5],y+ys[5], V_LINE_W,V_LINE_H,'white');
	}
	if(n==5){
		colorRect(x+xs[0],y+ys[0], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[1],y+ys[1], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[3],y+ys[3], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[5],y+ys[5], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[6],y+ys[6], H_LINE_W,H_LINE_H,'white');
	}
	if(n==6){
		colorRect(x+xs[0],y+ys[0], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[1],y+ys[1], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[3],y+ys[3], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[4],y+ys[4], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[5],y+ys[5], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[6],y+ys[6], H_LINE_W,H_LINE_H,'white');
	}
	if(n==7){
		colorRect(x+xs[0],y+ys[0], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[2],y+ys[2], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[5],y+ys[5], V_LINE_W,V_LINE_H,'white');
	}
	if(n==8){
		colorRect(x+xs[0],y+ys[0], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[1],y+ys[1], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[2],y+ys[2], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[3],y+ys[3], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[4],y+ys[4], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[5],y+ys[5], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[6],y+ys[6], H_LINE_W,H_LINE_H,'white');
	}
	if(n==9){
		colorRect(x+xs[0],y+ys[0], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[1],y+ys[1], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[2],y+ys[2], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[3],y+ys[3], H_LINE_W,H_LINE_H,'white');
		colorRect(x+xs[5],y+ys[5], V_LINE_W,V_LINE_H,'white');
		colorRect(x+xs[6],y+ys[6], H_LINE_W,H_LINE_H,'white');
	}
}

function drawBlockyNumber(n,x,y){
	if(n>9){
		drawBlockyDigit(x-NUM_W,y,n/10);
		drawBlockyDigit(x+OFFSET,y,n%10);
	}
	else
		drawBlockyDigit(x,y,n);
}



