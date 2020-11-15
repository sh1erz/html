function callback1(cb2){
	console.log("First callback appeared");
	console.log(cb2());
}
function callback2(){
	return "Second callback appeared";
}

function Callbacks(callback1, callback2){
	console.log("Sterting task 4");
	setTimeout(function() {
		callback1(callback2);
	},3000);
	//console.log(callback2);	
}

Callbacks(callback1, callback2);