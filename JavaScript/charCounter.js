function updateQCount(event){
  var text = document.getElementById("questionInput").value;
  var counter = text.length;
  var remaining = 150;
  if (counter <= 150){
    document.getElementById("qCounter").innerHTML = (counter + '/' + (remaining-counter));
    document.getElementById("qCounter").className = ""
  } else {
    document.getElementById("qCounter").innerHTML = (counter  + ' character limit exceeded by ' + (remaining-counter)*-1);
    document.getElementById("qCounter").className = "warning"
  }
  return false;
}

function updateOpCount(event){
  var elements = event.currentTarget;
  var id = elements.id;                         //will equal opInput1 or whichever textbox changed
  var targetId = "op" +id.substring(7,8)+"Count"
  var text = elements.value;
  var counter = text.length;
  var remaining = 50;
  if (counter <= 50){
    document.getElementById(targetId).innerHTML = (counter + '/' + (remaining-counter));
    event.target.className = "";
  } else {
    document.getElementById(targetId).innerHTML = (counter  + ' character limit exceeded by ' + (remaining-counter)*-1);
    document.getElementById(targetId).className = "warning"
  }
  return false;
}
