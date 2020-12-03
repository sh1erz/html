centerBegining = document.getElementById('center').innerHTML;
let flag = true;
buttonPlay.addEventListener("click", function(){
	if(flag){
		flag = false;
		HideDiv('center');
	}
});

controls = document.createElement('div');
controls.className = "controls";
anim = document.createElement('div');
anim.className = "anim";

startB = document.createElement('button');
startB.innerHTML = "Start";
stopB = document.createElement('button');
stopB.innerHTML = "Stop";
reloadB = document.createElement('button');
reloadB.innerHTML = "reload";

redSq = document.createElement('div');
redSq.className = "redSq";
greenSq = document.createElement('div');
greenSq.className = "greenSq";


function HideDiv(id){
	document.getElementById("center").style.padding = "0px";
	document.getElementById(id).innerHTML='';
	center.append(controls);
	center.append(anim);
	anim.append(redSq);
	anim.append(greenSq);
	timerg = setInterval(green, 3);	
	timerr = setInterval(red, 20);

	/*requestAnimationFrame(red);
	requestAnimationFrame(green);*/

}
let rpos = 0;
let gpos = 0;	
let step = 0.5;
let rstep = 1;
function red(){
	rpos += rstep;
	if (rpos == (anim.offsetHeight - 25) || rpos == 0) {
	    rstep = - rstep;
	}	
	redSq.style.marginTop = rpos + 'px';	
}

function green(){	
	gpos += step;		
	if (gpos == (anim.offsetWidth - 25) || gpos == 0) {
	    step = - step;
	} 	    
	greenSq.style.marginLeft = gpos + 'px';
}

function frame(){
	gpos += step;
	rpos += rstep;	
	if (gpos == (anim.offsetWidth - 25) || gpos == 0) {
	    step = - step;
	} 	
	if (rpos == (anim.offsetHeight - 25) || rpos == 0) {
	    rstep = - rstep;
	}
	greenSq.style.marginLeft = gpos + 'px';
	redSq.style.marginTop = rpos + 'px';
	requestAnimationFrame(frame);	
}
function ShowDiv(id){
	id.style.padding = "10px";
	//learInterval(timer);
	flag = true;
	document.getElementById(id).innerHTML = centerBegining;
}

