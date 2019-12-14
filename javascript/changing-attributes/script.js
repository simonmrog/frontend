"use strict";

//CLASSES
class $Element {

	constructor (className) {

		this.data = document.querySelector (className);
  	}

  	//Emulate setting data as $().attr()
  setAttributes (attributes) {
  
	 	for (let attr in attributes) {
			this.data.setAttribute(attr, attributes[attr]);
		}
  	}
}


var className = "image";
var attributes = {

	"src": "https://cdn.pixabay.com/photo/2017/01/04/08/27/lake-1951519_960_720.jpg",
  	"width": "200px",
  	"alt":"image not found"
};


//Using JQuery
var $imgJQ = $ ("." + className + "JQ");
$imgJQ.attr (attributes);
console.log ("Img using JQuery: ", $imgJQ[0]);


//Using pure JavaScript
var $img = new $Element ("." + className);
$img.setAttributes (attributes);
console.log ("Img using new class: ", $img.data);