//updates remaining characters in corresponding textbox
function updateOpCount(event){
  var elements = event.currentTarget;
  var id = elements.id;                         //will equal opInput1 or whichever textbox changed
  var op = id.substring(7,8)
  var targetId = "op" +op+"Count"
  var text = elements.value;
  var counter = text.length;
  var remaining;
  var max;
  if (op != 0){
    remaining = 50;
    max = 50;
  } else {
    remaining = 100;
    max = 100;
  }
  if (counter <= max){
    document.getElementById(targetId).innerHTML = (counter + '/' + (remaining-counter));
    document.getElementById(targetId).className = "warning"
  } else {
    document.getElementById(targetId).innerHTML = (counter  + ' character limit exceeded by ' + (remaining-counter)*-1);
    document.getElementById(targetId).className = "warning"
  }
  return false;
}
