var user = document.getElementById("text_user");
var password = document.getElementById("text_password");
var button = document.getElementById("login_button");

function login () {

  alert ("You've been logged in.");
  user.value = "";
  password.value = "";
}

button.addEventListener("click", login);
