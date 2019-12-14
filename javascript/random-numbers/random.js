var text_min = document.getElementById("text_min");
var text_max = document.getElementById("text_max");
var button = document.getElementById("button");

function random (event) {

  var min = parseInt(text_min.value);
  var max = parseInt(text_max.value);
  var n = Math.floor (Math.random() * (max - min + 1)) + min;
  alert("The random number is: " + n);
}

button.addEventListener("click", random);
