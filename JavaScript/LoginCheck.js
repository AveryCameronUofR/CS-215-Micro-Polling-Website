function validateLogin(event){
  var check = true;
	var elements = event.currentTarget;

  var email = elements[0].value;
  var password = elements[1].value;

  var emailCheck = /^\w+@[a-zA-Z_0-9]+?\.[a-zA-Z]{2,3}$/
	var passwordCheck = /[0-9]*[a-zA-Z_0-9]+[0-9]*/;

  document.getElementById("emailWarn").innerHTML = "";
  document.getElementById("passwordWarn").innerHTML = "";
  document.getElementById("success").innerHTML = "";

  if (email == null || email == ""){
		document.getElementById("emailWarn").innerHTML = "Email cannot be left blank";
		check = false;
	} else if (emailCheck.test(email) == false){
		document.getElementById("emailWarn").innerHTML = "Please Enter your email address in this format: username@somewhere.sth";
		check = false;
	}

  if (password== null || password== ""){
		document.getElementById("passwordWarn").innerHTML = "Password cannot be left blank";
		check = false;
	} else if (passwordCheck.test(password) == false || password.length < 8){
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
