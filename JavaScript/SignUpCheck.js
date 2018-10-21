function validateSignUp(event){
    var elements = event.currentTarget;

    var email = elements[0].value;
    var username = elements[1].value;
    var birthday = elements[2].value;
    var password = elements[4].value;
    var passCheck = elements[5].value;
    var validBirthday = false;
    var result = true;

    // declare variables for valid input in regular expression for email, username and password
    var emailResult = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var unameResult = /^[a-zA-Z0-9_-]+$/;
    var birthResult = /[0-3][0-9][/][0-1][0-9][/][0-9]{4}/;
    var passwordResult = /^(\S*)?\d+(\S*)?$/;


    document.getElementById("emailWarn").innerHTML ="";
    document.getElementById("unameWarn").innerHTML ="";
    document.getElementById("birthWarn").innerHTML ="";
    document.getElementById("passwordWarn").innerHTML ="";
    document.getElementById("passCheckWarn").innerHTML ="";


    if (email == null || email == ""){
  		document.getElementById("emailWarn").innerHTML = "Email cannot be left blank";
  		result = false;
	  } else if (emailResult.test(email) == false){
  		document.getElementById("emailWarn").innerHTML = "Please Enter your email address in this format: username@somewhere.sth";
  		result = false;
	  }

  	if (username == null || username == ""){
  		document.getElementById("unameWarn").innerHTML = "Username cannot be left blank";
  		result = false;
  	} else if (unameResult.test(username) == false){
  		document.getElementById("unameWarn").innerHTML = "Username cannot contain leading or trailing spaces";
  		result = false;
  	}

    if (birthday == null || birthday == ""){
  		document.getElementById("birthWarn").innerHTML = "Birthday cannot be left blank";
  		result = false;
  	} else if (birthResult.test(birthday) == true){
      validBirthday = checkDate(birthday)
      if (validBirthday == false){
        	document.getElementById("birthWarn").innerHTML = "Ensure valid days and months";
          result = false;
      } else {
        result = true;
      }

  	} else if (birthResult.test(birthday) == false){
      document.getElementById("birthWarn").innerHTML = "Birthday must be in proper format (DD/MM/YYYY)";
      result = false;
    }

  	if (password== null || password== ""){
  		document.getElementById("passwordWarn").innerHTML = "Password cannot be left blank";
  		result = false;
  	} else if (passwordResult.test(password) == false || password.length < 8){
  		document.getElementById("passwordWarn").innerHTML = "Please enter a valid password (8+ characters, at least one non-letter)";
  		result = false;
  	}

  	if (passCheck == null || passCheck == ""){
  		document.getElementById("passCheckWarn").innerHTML = "Verify cannot be left blank";
  		result = false;
  	} else if (passCheck != password){
  		document.getElementById("passCheckWarn").innerHTML = "Passwords must match each other";
  		result = false;
  	}


      //prevent form to be submitted if one of above field is invalid
    if(result == false ){
        event.preventDefault();
        return false;
    }
    if(result == true){
      document.getElementById("success").innerHTML="Successful Submission";
      return false;
    }

}
