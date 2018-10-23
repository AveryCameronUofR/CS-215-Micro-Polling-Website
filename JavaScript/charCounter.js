function updateQCount(event){
  var text = document.getElementById("questionInput").value;
  var counter = text.length;
  var remaining = 150;
  if (counter <= 150){
    document.getElementById("qCounter").innerHTML = (counter + '/' + (remaining-counter));
    event.target.className = "";
    document.getElementById("qCounter").className = ""
  } else {
    document.getElementById("qCounter").innerHTML = (counter  + ' character limit exceeded by ' + (remaining-counter)*-1);
    event.target.className = "warning";
    document.getElementById("qCounter").className = "warning"
  }
  return false;
}

function updateOpCount(event){
  var elements = event.currentTarget;
  var text2 = elements.value;
  var text = document.getElementById("questionInput").value;
  var counter = text.length;
  var remaining = 150;
  if (counter <= 150){
    document.getElementById("qCounter").innerHTML = (counter + '/' + (remaining-counter));
    event.target.className = "";
    document.getElementById("qCounter").className = ""
  } else {
    document.getElementById("qCounter").innerHTML = (counter  + ' character limit exceeded by ' + (remaining-counter)*-1);
    event.target.className = "warning";
    document.getElementById("qCounter").className = "warning"
  }
  return false;
}
