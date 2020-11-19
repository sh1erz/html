let form3 = document.getElementById("formGit");
form3.addEventListener("submit", Clear);

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
	 	errordiv = document.createElement('div');
	 	errordiv.style.backgroundColor = "red";
	 	errordiv.innerHTML = "Error:" + response.statusText;
	 	fieldset3.after(errordiv);
	}
}

function Clear(){
	errordiv.innerHTML = "";
	errordiv.hidden = true;
	gitTextarea.innerHTML = "";
}