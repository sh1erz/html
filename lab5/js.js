localStorage.setItem('messages', "");
let centerBegining = document.getElementById('center').innerHTML;
let flag = true;
let timer;
let rpos = 0;
let gpos = 0;	
let step = 1;
let rstep = 1;

let textNode = document.createElement('i');

buttonPlay.addEventListener("click", function(){
	if(flag){
		flag = false;
		HideDiv('center');
		toTextNode("button play is pressed");
	}
});

let controls = document.createElement('div');
controls.className = "controls";
anim = document.createElement('div');
anim.className = "anim";

let stopB = document.createElement("input");
stopB.type = "button";
stopB.value = "Stop";
stopB.addEventListener("click", function(){
	clearInterval(timer);
	//clearInterval(timerr);
	controls.replaceChild(startB, stopB);
	toTextNode("button stop is pressed");
});

let reloadB = document.createElement("input");
reloadB.type = "button";
reloadB.value = "Reload";
reloadB.addEventListener("click", function(){
	greenSq.style.marginLeft = '0px';
	redSq.style.marginTop = '0px';
	controls.replaceChild(startB, reloadB);
	rpos = 0;
	gpos = 0;	
	step = 1;
	rstep = 1;
	toTextNode("button reload is pressed");
})

let redSq = document.createElement('div');
redSq.className = "redSq";
greenSq = document.createElement('div');
greenSq.className = "greenSq";

let startB = document.createElement("input");
startB.type = "button";
startB.value = "Start";
startB.addEventListener("click", StartAnim);
startB.addEventListener("click", function(){
	controls.replaceChild(stopB, startB);
	toTextNode("button start is pressed");
});

function HideDiv(id){
	document.getElementById("center").style.padding = "0px";
	document.getElementById(id).innerHTML='';
	center.append(controls);
	center.append(anim);
	anim.append(redSq);
	anim.append(greenSq);
	controls.append(startB);
	controls.append(textNode);
	let date = new Date();
	localStorage.messages += ";work closed " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function StartAnim(){
	timer = setInterval(RedGreen, 6);	

}

function RedGreen(){
	rpos += 3*rstep;
	gpos += 1.8*step;
	let Rcoords = redSq.getBoundingClientRect();
	let Gcoords = greenSq.getBoundingClientRect();
	if(Rcoords.left >= Gcoords.left && Rcoords.left <= Gcoords.right &&
		Rcoords.top <= Gcoords.bottom && Rcoords.top >= Gcoords.top &&
		Rcoords.right >= Gcoords.left && Rcoords.right <= Gcoords.right &&
		Rcoords.bottom <= Gcoords.bottom && Rcoords.bottom >= Gcoords.top){
		clearInterval(timer);
		//clearInterval(timerr);
		controls.replaceChild(reloadB, stopB);
		toTextNode("squares crossed");
	}	
	if (rpos >= (anim.offsetHeight - 20) || rpos <= 0) {
	    rstep = - rstep;
	    toTextNode("red square touched the wall");
	}	
	if (gpos >= (anim.offsetWidth - 30) || gpos <= 0) {
	    step = - step;
	    toTextNode("green square touched the wall");
	} 	    
	redSq.style.marginTop = rpos + 'px';	
	greenSq.style.marginLeft = gpos + 'px';

}
/*function red(){
	rpos += rstep;
	let Rcoords = redSq.getBoundingClientRect();
	let Gcoords = greenSq.getBoundingClientRect();
	if(Rcoords.left >= Gcoords.left && Rcoords.left <= Gcoords.right &&
		Rcoords.top <= Gcoords.bottom && Rcoords.top >= Gcoords.top &&
		Rcoords.right >= Gcoords.left && Rcoords.right <= Gcoords.right &&
		Rcoords.bottom <= Gcoords.bottom && Rcoords.bottom >= Gcoords.top){
		clearInterval(timerg);
		clearInterval(timerr);
		controls.replaceChild(reloadB, stopB);
		toTextNode("squares crossed");
	}

	if (rpos >= (anim.offsetHeight - 20) || rpos <= 0) {
	    rstep = - rstep;
	    toTextNode("red square touched the wall");
	}	
	redSq.style.marginTop = rpos + 'px';	
}

function green(){	
	gpos += step;		
	if (gpos >= (anim.offsetWidth - 30) || gpos <= 0) {
	    step = - step;
	    toTextNode("green square touched the wall");
	} 	    
	greenSq.style.marginLeft = gpos + 'px';
}*/

function ShowDiv(id){
	document.getElementById(id).style.padding = "10px";
	clearInterval(timer);
	//clearInterval(timerr);
	flag = true;
	document.getElementById(id).innerHTML = centerBegining;
	toTextNode("button cancel is pressed");
	ShowLocal();

}

function toTextNode(message){
	textNode.innerHTML = " " + message;
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

