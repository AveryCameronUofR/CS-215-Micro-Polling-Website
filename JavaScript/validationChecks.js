/*
* checkDate
* Ensures that the dates are validBirthday
* Checks days associated with each month
* checks for leap years for february
*returns:
* 0 if true (valid date)
* 1 if invalid month
* 2 if max is 31 days
* 3 if max is 30 days
* 4 if february and 29 day max
* 5 if february and 30 day max
*/
function checkDate(inputDate){
    //gets the days from the substring in from DD/MM/YYYY
    var days = inputDate.substring(3,5);
    var months = inputDate.substring(0,2);
    var years = inputDate.substring(6,11);
    //turns the strings into integer values
    var intDay = parseInt(days);
    var intMonth = parseInt(months);
    var year = parseInt(years);
    var leapyear = false;

    //if the months are greater than 12 it is not valid
    if (intMonth > 12){
      return 1;
    }
    //if the month has 31 days, make sure intDay does not hold more than 31 days, return false if it does
    else if (intMonth == 1 || intMonth == 3 || intMonth ==  5 || intMonth == 7 || intMonth == 8||intMonth == 10 || intMonth == 12){
      if (intDay > 31){
        return 2;
      } else {
        return 0;
      }
      //checks if intDay is greater than 30 in months when that is the max
    } else if (intMonth == 4 || intMonth == 6 || intMonth ==  9 || intMonth == 11) {
      if (intDay > 30){
        return 3;
      } else {
        return 0;
      }
    } else {
      if (year % 4 == 0){ //checks for leapyear for february
        if (year %100 ==0){
          if (year % 400 == 0){
            leapyear =true;
          } else {
            leapyear = false;
          }
        } else {
          leapyear =false;
        }
      } else {
        leapyear = false;
      }
    }

    if (leapyear == true){
      if (intDay > 29){
        return 4;
      } else {
        return 0;
      }
    } else {
      if (intDay > 28){
        return 5;
      } else {
        return 0;
      }
    }
}

/*
 * checks if the email is in valid format (someone@some.com)
 */
function emailCheck(email){
	var emailTest = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if (emailTest.test(email) == false){
		return false;
	} else {
		return true;
	}
}

/*
 * checks username for spaces
 */
function unameCheck(username){
	var unameResult = /^[a-zA-Z0-9_-]+$/;
	if (unameResult.test(username) == false){
		return false;
	} else {
		return true;
	}
}

/*
 * checks password for at least 1 numeral
 */
function passwordCheck(password){
	var passwordResult = /^(\S*)?\d+(\S*)?$/;
	if (passwordResult.test(password) == false){
		return false;
	} else {
		return true;
	}
}
