"use strict"

var form = document.querySelector ("#form");
var dashed = document.querySelector (".box.dashed");
dashed.style.display = "none";

//FUNCTIONS
function validate (data, labels) {

	var flag = true;
	if (data[0].trim () == null || data[0].trim (). length == 0
		|| data[1].trim () == null || data[1].trim (). length == 0
		|| data[2].trim () == null || data[2].trim (). length == 0) {
		alert ("Invalid data.");
		flag = false;
	}
	else if (isNaN (data[2])) {
		alert ("Invalid data.");
		flag = false;
	}

	return (flag);
}

function showData (data, label) {

	document.querySelector ("#" + label + "-p span").innerHTML = data;
	dashed.style.display = "block";
}

//EVENTS
form.addEventListener ("submit", function () {

	var name = document.querySelector ("#name").value;
	var lastname = document.querySelector ("#lastname").value;
	var age = document.querySelector ("#age").value;

	var data = [name, lastname, age];
	var labels = ["name", "lastname", "age"];

	if (validate (data, labels)) {
		for (let i=0; i<data.length; i++)
		showData (data[i], labels[i]);
	}
});