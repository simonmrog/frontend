"use strict"

var button = document.querySelector ("#button");
button.style.background = "red";
button.style.color = "white";


//FUNCTIONS
function changeColor () {

	var color = button.style.background;
	if (color == "red")	
		color = "green";
	else if (color == "green")
		color = "red";
	
	button.style.background = color;
}


//EVENTS
button.addEventListener ("click", function () {
	alert ("You pressed me.");
})
button.addEventListener ("mouseover", changeColor);
button.addEventListener ("mouseout", changeColor);