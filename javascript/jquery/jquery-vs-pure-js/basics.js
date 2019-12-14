//COMPARISON BETWEEN JQUERY FUNCTIONS AND PURE JAVASCRIPT FUNCTIONS

//ADDING CSS STYLE WITH JQUERY
function setStyleJQ () {

	let div = $("div");
	div.css ("background", "blue");
	div.css ("color", "white");;
	div.css ("cursor", "pointer");
}
//ADDING CSS STYLE WITH PURE JAVASCRIPT
function setStyleJS () {
	
	let div2 = document.querySelectorAll("div");
	div2.forEach (function (element) {

		element.style.background = "blue";
		element.style.color = "white";
		element.style.cursor = "pointer";
	});
}


//TOGGLING CLASSES WITH JQUERY
function toogleClassJQ () {

	let el = $(".wrapper");
	el.click (function () {
		$(this).toggleClass ("bordered");
	});

}
//TOGGLING CLASSES WITH PURE JAVASCRIPT
function toggleClassJS () {

	let el2 = document.querySelectorAll (".wrapper");
	el2.forEach (function (element) {
		element.addEventListener ("click", function () {
			this.classList.toggle ("bordered");
		});
	});
}


//REMOVING CLASSES WITH JQUERY
function removeClassJQ (cssClass) {

	let el = $("div");
	el.click (function () {
		if ($(this).hasClass (cssClass)) {
			$(this).removeClass (cssClass);
			console.log ("Class '" + cssClass + "' removed.")	
		}
		else console.log ("Element doesn't have that class name");
	});
}
//REMOVING CLASSES WITH PURE JS
function removeClassJS (cssClass) {

	let el = document.querySelectorAll ("div");
	el.forEach (function (element) {
		element.addEventListener ("click", function () {
			if (this.classList.contains (cssClass)) {
				this.classList.remove (cssClass);
				console.log ("Class name '" + cssClass + "' removed.")
			}
			else console.log ("Element doesn't have that class name");
		});
	});	
}


//JQUERY FUNCTIONS
// setStyleJQ ();
// toogleClassJQ ();
// removeClassJQ ("wrapper");

//PURE JAVASCRIPT FUNCTIONS
setStyleJS ();
toggleClassJS ();
removeClassJS ("wrapper");