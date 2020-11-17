$(function() {
	$('.error').hide();
    $(".button").click(function() {
  	    let user = $("input#user").val();
  		if (user == "") {
	        $("label#user_error").show();
	        $("input#user").focus();
	        return false;
      	}
  		let repos = $("input#repos").val();
  		if (repos == "") {
	        $("label#repos_error").show();
	        $("input#repos").focus();
	        return false;
      	}
		gitGet(user, repos);
		return false;
    });
});

async function gitGet(user, repos){
	let response = await fetch("https://api.github.com/repos/" + user + '/' + repos + "/commits");
	if (response.ok) { 
	  let commits = await response.json();
	  let output = "";
	  for (let i = 0; i < commits.length; i++) {
	  	output += commits[i].commit.author.name + ': ' + commits[i].commit.message + '\n';
	  }
	  gitTextarea.innerHTML = output;
	}
	 else {
	 	let errordiv = document.createElement('div');
	 	errordiv.style.backgroundColor = "red";
	 	errordiv.innerHTML = "Error:" + response.status;
	 	fieldset3.after(errordiv);
	  	alert("Ошибка HTTP: " + response.status);
	}
}
