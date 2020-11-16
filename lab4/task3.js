//subm.addEventListener('click', gitGet);
$(function() {
	$('.error').hide();
    $(".button").click(function() {
      // validate and process form here
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
      	/*let dataString = 'user='+ user + '&repos=' + repos;
  		//alert (dataString);return false;
      	$.ajax({
      		//type: "POST",
		    //url: "bin/process.php",
		    data: dataString,
		    success: function() {
		   		gitGet(user, repos);
		    }
		});*/
		gitGet(user, repos);
		return false;
    });
});

async function gitGet(user, repos){
	let response = await fetch("https://api.github.com/repos/" + user + '/' + repos + "/commits");
	if (response.ok) { 
	  let commits = await response.json();
	  let output;
	  for (let i = 0; i < commits.length; i++) {
	  	output += commits[i].commit.author.name + ': ' + commits[i].commit.message + '\n';
	  }
	  gitTextarea.innerHTML = output;
	}
	 else {
	 	let error = document.createElement('div');
	 	error.style.backgroundColor = "red";
	 	error.innerHTML = "Error:" + response.status;
	 	gitTextarea.after()
	  alert("Ошибка HTTP: " + response.status);
	}
}
