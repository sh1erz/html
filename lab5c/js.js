localStorage.setItem('messages', "");
let centerBegining = document.getElementById('center').innerHTML;
let flag = true;
let timer;

let rpos;
let gpos;	
let step = 1;
let rstep = 1;
let canvas = document.createElement('canvas');
canvas.className = "canvas";
let ctx;

buttonPlay.addEventListener("click", function(){
	if(flag){
		flag = false;
		HideDiv('center');
		toTextNode("work open");
		StartAnim();
	}
});


anim = document.createElement('div');
anim.className = "anim";

function HideDiv(id){
	document.getElementById("center").style.padding = "0px";
	document.getElementById(id).innerHTML='';
	center.append(anim);
	canvas.setAttribute('width', anim.offsetWidth - 10);
	canvas.setAttribute('height', anim.offsetHeight - 10);
	anim.append(canvas);
	ctx = canvas.getContext("2d");
	let date = new Date();
	localStorage.messages += ";work closed " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

}

function StartAnim(){
	timer = setInterval(drawSquares, 6);
	rpos = 1;
	gpos = 1;
}

function drawSquares(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let centW = canvas.width/2;
	let centH = canvas.height/2;
	if(rpos >= centH - 10 && rpos <= centH && gpos >= centW - 15 && gpos <= centW - 5){
		clearInterval(timer);
		toTextNode("squares crossed");
	}
	if (rpos >= (canvas.height - 10) || rpos <= 0) {
	    rstep = - rstep;
	    toTextNode("red square touched the wall");
	}	
			
	if (gpos >= (canvas.width - 20) || gpos <= 0) {
	    step = - step;
	    toTextNode("green square touched the wall");
	} 	  
	ctx.fillStyle = "red";
	ctx.beginPath();
	let redSq = ctx.rect(centW - 5, rpos, 10, 10); 
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "green";
	ctx.beginPath();
	let greenSq = ctx.rect(gpos, centH -10, 20, 20);
	ctx.closePath();
	ctx.fill();
	rpos += 3*rstep;
	gpos +=1.9*step;
	}

function ShowDiv(id){
	if (!flag) {
		document.getElementById(id).style.padding = "10px";
	clearInterval(timer);
	flag = true;
	document.getElementById(id).innerHTML = centerBegining;
	toTextNode("button cancel is pressed");
	ShowLocal();
	}
}

function toTextNode(message){
	let date = new Date();
	localStorage.messages += ";" + message + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function ShowLocal(){
	let str = localStorage.getItem('messages');
	let arr = str.split(";");
	for (var i = 0; i < arr.length; i++) {
		document.getElementById("Notifications").innerHTML += arr[i] + "\n";
	}
}

