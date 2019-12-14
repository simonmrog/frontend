"use strict"

var numbers = new Array ();

for (let i=0; i < 6; i++) {
	numbers.push (Number(prompt ("Enter number", 0)));
}

console.log (numbers);
document.write ("<h2> 1. Array generated </h2>");
document.write("[" + numbers + "]");

document.write ("<hr/>");

document.write ("<h2> 2. Array sorted </h2>");
var numbersSorted = numbers.slice (0).sort (function (a, b) {
	return (a-b);
});
document.write("[" + numbersSorted + "]");

document.write ("<hr/>");

document.write ("<h2> 3. Array inverted </h2>");
var numbersSortedInverted = numbersSorted.reverse ();
document.write("[" + numbersSortedInverted + "]");

document.write ("<hr/>");

document.write ("<h2> 4. Array length </h2>");
document.write("The array has " + numbers.length + " elements.");

document.write ("<hr/>");

document.write ("<h2> 5. Searching an element </h2>");
var value = Number (prompt ("Value to search:", 0));
var result = search (value, numbers);
document.write (result);

function search (value, array) {

	var message;
	var search = array.findIndex (function (e) {
		return (e == value);
	});
	
	if (search == -1)
		message = "Value not found.";
	else
		message = "Value was found at " + search + " position.";

	return (message);
}