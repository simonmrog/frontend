"use strict"

var input = document.querySelector ("#name");


//EVENTS
input.addEventListener ("focus", function () {
	console.log ("Fucus event");
});

input.addEventListener ("blur", function () {
	console.log ("Blur event");
});

input.addEventListener ("keypress", function (event) {
	console.log ("You pressed: " + String.fromCharCode(event.keyCode));
});
