document.getElementById("createPoll").addEventListener("submit", validatePoll, false);
document.getElementById("questionInput").addEventListener("keyup", updateQCount, false);
var id = document.getElementById("opInput1");
document.getElementById("option1").addEventListener("keypress", updateOpCount, false);
document.getElementById("op2Input").addEventListener("keypress", updateOpCount, false);
document.getElementById("op3Input").addEventListener("keyup", updateOpCount, false);
document.getElementById("op4Input").addEventListener("keyup", updateOpCount, false);
document.getElementById("op5Input").addEventListener("keyup", updateOpCount, false)
