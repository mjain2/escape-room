function validateEntryForm() {
  var password_entered = document.forms["startRoom"]["password"].value;
  var actual_password = getMCPassword();
  var areEqual = password_entered.toUpperCase() === actual_password.toUpperCase();
  if (!areEqual) {
    alert("Incorrect password.  Try again.");
  } else {
    alert("Beep, boop, setting up system ...");
    window.location.replace("./puzzles/diagnostics");
  }
  return false;
}

function displayDiagnostics() {
var delayInMilliseconds = 5000; //5 second
var showDiagnostics = document.getElementById("shipDiagnostics");
var runStatus = document.getElementById("runStatus");
runStatus.innerText = 'Running...'
setTimeout(function() {
 
  if (showDiagnostics.style.display === "none") {
    showDiagnostics.style.display = "block";
    runStatus.innerText = 'Completed, displaying below:'
  } 
}, delayInMilliseconds);

}