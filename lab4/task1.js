//1
let classesArr = ['u2', "menu", "center", "tall", "horizontal", "l2"];
let contentArr = [5];
for (let i = 0; i < classesArr.length; i++) {
	contentArr[i] = document.getElementsByClassName(classesArr[i])[0].innerHTML;
}
document.getElementsByClassName(classesArr[0])[0].innerHTML = contentArr[5]; //1
ChangeCont();
function ChangeCont(){
	let i = 0;
	let timer = setInterval(function() {
		if (i == 4) {
			document.getElementsByClassName(classesArr[i + 1])[0].innerHTML = contentArr[i].substring(0,100) + '</p>';
		}
		else
		{
			document.getElementsByClassName(classesArr[i + 1])[0].innerHTML = contentArr[i];	
		}
		if (i == 4) {
		    clearInterval(timer);
		}
		i++;
	}, 5000);
}
	




