function validatePoll(event){
    var elements = event.currentTarget;

    //gets the value stored in element array(from form)
    var name = elements[0].value;
    var question = elements[1].value;
    var option1 = elements[2].value;
    var option2 = elements[3].value;
    var option3 = elements[4].value;
    var option4 = elements[5].value;
    var option5 = elements[6].value;
    var startDate = elements[7].value;
    var endDate = elements[8].value;
    //declare variables used for date verification
    var startTime, endTime, openDate, closeDate;
    var tempDate, tempYear;

    var result = true;
    var empty3, empty4, empty5 = false;
    var validStart, validEnd = false;

    //checks for proper format (using numbers in each pos)
    var dateResult = /[0-1][0-9][/][0-3][0-9][/][0-9]{4}[ ][0-2][0-9][:][0-5][0-9]/;

    document.getElementById("nameWarn").innerHTML ="";
    document.getElementById("questionWarn").innerHTML ="";
    document.getElementById("option1Warn").innerHTML ="";
    document.getElementById("option2Warn").innerHTML ="";
    document.getElementById("option3Warn").innerHTML ="";
    document.getElementById("option4Warn").innerHTML ="";
    document.getElementById("option5Warn").innerHTML ="";
    document.getElementById("startWarn").innerHTML ="";
    document.getElementById("endWarn").innerHTML ="";


    if (name == null || name == "" ){
      result = false;
      document.getElementById("nameWarn").innerHTML = "Poll name cannot be left blank";
    }


    if (question == null || question == "" ){
      result = false;
      document.getElementById("questionWarn").innerHTML = "Question cannot be left blank";
    } else if (question.length > 100){
      result = false;
      document.getElementById("questionWarn").innerHTML = "Question cannot be longer than 100 characters";
    }

    if (option1 == null || option1 == ""){
  		document.getElementById("option1Warn").innerHTML = "Option 1 cannot be left blank";
  		result = false;
	  } else if (option1.length > 50){
  		document.getElementById("option1Warn").innerHTML = "Options cannot be longer than 50 characters";
  		result = false;
	  }

    if (option2 == null || option2 == ""){
  		document.getElementById("option2Warn").innerHTML = "Option 2 cannot be left blank(need at least 2 choices)";
  		result = false;
	  } else if (option2.length > 50){
  		document.getElementById("option2Warn").innerHTML = "Options cannot be longer than 50 characters";
  		result = false;
	  }

    if (option3 == null || option3 == ""){
  		empty3 = true; //option3 can be blank as long as option 4 and 5 are as well
	  } else if (option3.length > 50){
  		document.getElementById("option3Warn").innerHTML = "Options cannot be longer than 50 characters";
  		result = false;
	  }

    if (option4 == null || option4 == ""){
  		empty4 = true;
	  } else if (option4.length > 50){
  		document.getElementById("option4Warn").innerHTML = "Options cannot be longer than 50 characters";
  		result = false;
	  }

    if (option5 == null || option5 == ""){
  		empty5 = true;
	  } else if (option5.length > 50){
  		document.getElementById("option5Warn").innerHTML = "Options cannot be longer than 50 characters";
  		result = false;
	  }

    //checks the startDate if it is blank, then checks against regex for valid format
    if (startDate == null || startDate == ""){
  		document.getElementById("startWarn").innerHTML = "Start Date cannot be left blank";
  		result = false;
  	} else if (dateResult.test(startDate) == true){
        //if the startDate is in a valid format: call checkDate to see if the days and months are valid
        validStart = checkDate(startDate);
        if (validStart == 1){
        	 document.getElementById("startWarn").innerHTML = "Month is not valid, can't be greater than 12";
           result = false;
    	  } else if (validStart == 2){
        	 document.getElementById("startWarn").innerHTML = "Current month cannot exceed 31 days";
           result = false;
    	  } else if (validStart == 3){
        	 document.getElementById("startWarn").innerHTML = "Current month cannot exceed 30 days";
           result = false;
    	  }
        else if (validStart == 4){
        	 document.getElementById("startWarn").innerHTML = "February is a leap year, max 29 days";
           result = false;
    	  } else if (validStart == 5){
        	 document.getElementById("startWarn").innerHTML = "February is not a leap year, max 28 days";
           result = false;
    	  }
        //startDate did not pass the regex
    }else if (dateResult.test(startDate) == false){
        document.getElementById("startWarn").innerHTML = "Start Date must be in proper format (MM/DD/YYYY 00:00)";
        result = false;
        validStart = false;
    }


    if (endDate == null || endDate == ""){
  		document.getElementById("endWarn").innerHTML = "End Date cannot be left blank";
  		result = false;
  	} else if (dateResult.test(endDate) == true){
        validEnd = checkDate(endDate);
        //checks to see if the days and months are valid
        if (validEnd == 1){
        	 document.getElementById("endWarn").innerHTML = "Month is not valid, can't be greater than 12";
           result = false;
    	  } else if (validEnd == 2){
        	 document.getElementById("endWarn").innerHTML = "Current month cannot exceed 31 days";
           result = false;
    	  } else if (validEnd == 3){
        	 document.getElementById("endWarn").innerHTML = "Current month cannot exceed 30 days";
           result = false;
    	  }
        else if (validEnd == 4){
        	 document.getElementById("endWarn").innerHTML = "February is a leap year, max 29 days";
           result = false;
    	  } else if (validEnd == 5){
        	 document.getElementById("endWarn").innerHTML = "February is not a leap year, max 28 days";
           result = false;
    	  } else {
          //if the end date is valid and the startDate is valid (0)
           if (validStart ==  0){
              //create 2 new dates, compare to ensure the close isn't before open and open isn't before current time
              openDate = new Date(startDate);
              closeDate = new Date(endDate);
              if (openDate > closeDate){
                result = false;
                document.getElementById("endWarn").innerHTML = "End date must be later than start date";
              } else if (openDate < date.now()){
                result = false;
                document.getElementById("startWarn").innerHTML = "Start date cannot start before current time";
              }
           }

         }
  	} else if (dateResult.test(endDate) == false){
      document.getElementById("endWarn").innerHTML = "End Date must be in proper format (MM/DD/YYYY 00:00)";
      result = false;
      validEnd = false;
    }

    if (empty3 == true ){
      if (empty4 != true){
        document.getElementById("option4Warn").innerHTML = "Option 4 cannot be filled if option 3 is empty";
        result = false;
        if (empty5 != true){
          document.getElementById("option5Warn").innerHTML = "Option 5 cannot be filled if option 3 is empty";
          result = false;
        }
      } else {
        if (empty5 != true){
          document.getElementById("option5Warn").innerHTML = "Option 5 cannot be filled if option 3 is empty";
          result = false;
        }
      }

    } else {
      if (empty4 == true){
        if (empty5 != true){
          document.getElementById("option5Warn").innerHTML = "Option 5 cannot be filled if option 4 is empty";
          result = false;
        }
      }
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
