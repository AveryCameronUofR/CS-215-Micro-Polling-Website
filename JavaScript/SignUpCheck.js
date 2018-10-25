function validateSignUp(event) {
    var elements = event.currentTarget;

    var email = elements[0].value;
    var username = elements[1].value;
    var birthday = elements[2].value;
    var password = elements[4].value;
    var passCheck = elements[5].value;
    var validBirthday = false;
    var result = true;

    // declare variables for valid input in regular expression for email, username and password
    var birthResult = /[0-1][0-9][//][0-3][0-9][//][0-9]{4}/;

    //sets warnings to blank
    document.getElementById("emailWarn").innerHTML = "";
    document.getElementById("unameWarn").innerHTML = "";
    document.getElementById("birthWarn").innerHTML = "";
    document.getElementById("passwordWarn").innerHTML = "";
    document.getElementById("passCheckWarn").innerHTML = "";

    /*
     * checks if the input is valid (will call to functions in validationChecks.js to confirm format)
     */
    if (email == null || email == ""){
  		document.getElementById("emailWarn").innerHTML = "Email cannot be left blank";
  		result = false;
	  } else if (emailCheck(email) == false){
  		document.getElementById("emailWarn").innerHTML = "Please Enter your email address in this format: username@somewhere.sth";
  		result = false;
	  }

  	if (username == null || username == ""){
  		document.getElementById("unameWarn").innerHTML = "Username cannot be left blank";
  		result = false;
  	} else if (unameCheck(username) == false){
  		document.getElementById("unameWarn").innerHTML = "Username cannot contain leading or trailing spaces";
  		result = false;
  	}

  	/*
  	 * checks if the birthday is valid with a function call to checkDate in validationCheck.js
  	 */
    if (birthday == null || birthday == ""){
  		document.getElementById("birthWarn").innerHTML = "Birthday cannot be left blank";
  		result = false;
  	} else if (birthResult.test(birthday) == true){
      validBirthday = checkDate(birthday)
      if (validBirthday == 1){
         document.getElementById("birthWarn").innerHTML = "Month is not valid, can't be greater than 12";
         result = false;
      } else if (validBirthday == 2){
         document.getElementById("birthWarn").innerHTML = "Current month cannot exceed 31 days";
         result = false;
      } else if (validBirthday == 3){
         document.getElementById("birthWarn").innerHTML = "Current month cannot exceed 30 days";
         result = false;
      }
      else if (validBirthday == 4){
         document.getElementById("birthWarn").innerHTML = "February is a leap year, max 29 days";
         result = false;
      } else if (validBirthday == 5){
         document.getElementById("birthWarn").innerHTML = "February is not a leap year, max 28 days";
         result = false;
      } else {
        result = true;
      }

  	} else if (birthResult.test(birthday) == false){
      document.getElementById("birthWarn").innerHTML = "Birthday must be in proper format (MM/DD/YYYY)";
      result = false;
    }

    	//checks password and confirm password
  	if (password== null || password== ""){
  		document.getElementById("passwordWarn").innerHTML = "Password cannot be left blank";
  		result = false;
  	} else if (!passwordCheck(password)|| password.length < 8){
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
