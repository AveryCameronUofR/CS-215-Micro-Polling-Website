/*
* checkDate
* Ensures that the dates are validBirthday
* Checks days associated with each month
* checks for leap years for february
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
      return false;
    }
    //if the month has 31 days, make sure intDay does not hold more than 31 days, return false if it does
    else if (intMonth == 1 || intMonth == 3 || intMonth ==  5 || intMonth == 7 || intMonth == 8||intMonth == 10 || intMonth == 12){
      if (intDay > 31){
        return false;
      } else {
        return true;
      }
    } else if (intMonth == 4 || intMonth == 6 || intMonth ==  9 || intMonth == 11) {
      if (intDay > 30){
        return false;
      } else {
        return true;
      }
    } else {
      if (year % 4 == 0){ //checks for leapyear for february
        if (year %100 ==0){
          if (year % 400 == 0){
            leapyear = true;
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
        return false;
      } else {
        return true;
      }
    } else {
      if (intDay > 28){
        return false;
      } else {
        return true;
      }
    }
}
