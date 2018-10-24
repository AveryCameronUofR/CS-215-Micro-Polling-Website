function validateLogin(event){
  var check = true;
	var elements = event.currentTarget;

  var email = elements[0].value;
  var password = elements[1].value;

  document.getElementById("emailWarn").innerHTML = "";
  document.getElementById("passwordWarn").innerHTML = "";
  document.getElementById("success").innerHTML = "";


  //emailCheck is a function in validationChecks.js included in html file using script tag
  if (email == null || email == ""){
		document.getElementById("emailWarn").innerHTML = "Email cannot be left blank";
		check = false;
	} else if (emailCheck(email) == false){
		document.getElementById("emailWarn").innerHTML = "Please Enter your email address in this format: username@somewhere.sth";
		check = false;
	}

  if (password== null || password== ""){
		document.getElementById("passwordWarn").innerHTML = "Password cannot be left blank";
		check = false;
	} else if (!passwordCheck(password) || password.length < 8){
		document.getElementById("passwordWarn").innerHTML = "Please enter a valid password (8+ characters, at least one non-letter)";
		check = false;
	}

  if (check == true){
		document.getElementById("success").innerHTML = "Successful Login";
    return true;
	} else if (check == false){
    event.preventDefault();
  }

  return false;
}
