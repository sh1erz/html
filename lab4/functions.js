
function setCookie(name, value){
	document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	alert(document.cookie);
	alert("adasdad")
}
function getCookie(name){
	var results = document.cookie.match ( '(^|;) ?' + name + '=([^;]*)(;|$)' );				 
	if ( results ){
		return true;
	}
	else{
		return undefined;
	}
}
function deleteCookie(name) {
	setCookie(name, "", {
		'max-age': -1
	});
}
function recurs(rel){
	if(confirm("Удалить куки?" + rel)){
		deleteCookie("tr1");
		location.reload();
	}
	else{
		recurs("  Нужно перезагрузить страницу");
	}
}				