function validateEntryForm() {
    var password_entered = document.forms["startRoom"]["password"].value;
    var actual_password = "test";
    var areEqual = password_entered.toUpperCase() === actual_password.toUpperCase();
    if (!areEqual) {
      alert("Incorrect password.  Try again.");
    } else {
      alert("Beep, boop, setting up system ...");
      window.location.replace("./3543517-MC");
    }
    return false;
  }