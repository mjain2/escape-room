function validateEntryForm() {
  var password_entered = document.forms["startRoom"]["password"].value;
  var actual_password = getMCPassword();
  var areEqual = password_entered.toUpperCase() === actual_password.toUpperCase();
  if (!areEqual) {
    alert("Incorrect password.  Try again.");
  } else {
    alert("Welcome ADMIN! Loading park informaion...");
    window.location.replace("./post");
  }
  return false;
}

function getMCPassword() {
  return "Nuvisaur21";
}