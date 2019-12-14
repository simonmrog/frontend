//MOUSEOVER-MOUSEOUT USING JQUERY
// $(document).ready (function () {

// 	let box = $("#box");
// 	box.mouseover (function () {

// 		$(this).css ("background", "red");
// 		$(this).css ("cursor", "pointer");
// 	});

// 	box.mouseout (function () {

// 		$(this).css ("background", "yellow");
// 		$(this).css ("cursor", "auto");
// 	});

// });


//MOUSEOVER-MOUSEOUT USING PURE JAVASCRIPT
let box = document.querySelector ("#box");
box.addEventListener ("mouseover", function () {

	this.style.background = "red";
	this.style.cursor = "pointer";
});

box.addEventListener ("mouseout", function () {

	this.style.background = "yellow";
	this.style.cursor = "auto";
});