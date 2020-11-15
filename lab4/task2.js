horizontal.addEventListener("mouseenter", changeColor16);
horizontal.addEventListener("mouseleave", stopChange4);
function changeColor16(){
	setTimeout(function() {
		document.getElementsByClassName("u2")[0].style.backgroundColor = "cyan";
		document.getElementsByClassName("l2")[0].style.backgroundColor = "cyan";
	}, 5000);
	let colorf = true;
	interv = setInterval(function() {
		if(colorf){
			document.getElementsByClassName("tall")[0].style.color = "cyan";
			colorf = false;
		}
		else{
			document.getElementsByClassName("tall")[0].style.color = "blue";
			colorf = true;
		}
	}, 5000);
}

function stopChange4(){
	document.getElementsByClassName("tall")[0].style.color = "black";
	clearInterval(interv);
}