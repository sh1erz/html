alert("task1");
let classesArr = ['u2', "menu", "center", "tall", "horizontal", "l2"];
let contentArr = [5];
alert(document.getElementsByClassName(classesArr[0])[0].innerHTML);
for (let i = 0; i < classesArr.length; i++) {
	contentArr[i] = document.getElementsByClassName(classesArr[i])[0].innerHTML;
}
document.getElementsByClassName(classesArr[0])[0].innerHTML = contentArr[5];
alert('for2');
for (let i = 0; i < classesArr.length - 1; i++) {
	setTimeout(function(){
		document.getElementsByClassName(classesArr[i + 1])[0].innerHTML = contentArr[i]; 
	}, 5000);
}
alert("w")


