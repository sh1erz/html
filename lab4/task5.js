let form5 = document.getElementById("numbersForm");

form5.onsubmit = function(){
	let inputArr = document.getElementById("numbers").value.split(' ');
	alert(inputArr);
	let numsArr = [];
	for (var i = 0; i < inputArr.length; i++) {
		if (inputArr[i].match(/\d/g) != null) {
			if (inputArr[i][0] == "-" && ((inputArr[i].match(/\d/g).length + 1) == inputArr[i].length)||
			 inputArr[i].match(/\d/g).length == inputArr[i].length) { 
				//если минус первый и длинна с ним == дл цифры 
			// или длина цифр == дл цифры
				numsArr.push(Number(inputArr[i]));
			}
			else{
				inputArr.splice(i, 1);
				i--;
			}
		}
		else{
			inputArr.splice(i, 1);
			i--;
		}
	}
	alert(SelectionSort(numsArr));
}

function SelectionSort(arr){
	let n = arr.length;
	for (var i = 0; i < n - 1; i++) {
		let min_ind = i;
		for (var j = i + 1; j < n; j++) {
			if (arr[j] < arr[min_ind]) {
				min_ind = j;
			}
		}
		let temp = arr[min_ind]; 
        arr[min_ind] = arr[i]; 
        arr[i] = temp; 
	}
	return arr;
}