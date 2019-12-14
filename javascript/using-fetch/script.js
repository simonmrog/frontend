"use strict";


getUsers ()
	.then ((data) => data.json())
	.then ((json) => {
		
		document.querySelector ("#loading-message").style.display = "none";
		showUsers (json.data);

		return (getJanet ());

	})
	.then ((data) => data.json())
	.then ((json) => {

		document.querySelector ("#loading-message2").style.display = "none";
		showJanet (json.data);
	})


//FUNCTIONS

function getUsers () {

	return (fetch ("https://reqres.in/api/users"));
}

function getJanet () {

	return (fetch ("https://reqres.in/api/users/2"));
}


function showUsers (users) {

	users.map ((users, i) => {

		let name = document.createElement ("span");
		name.innerHTML = (i+1) + ". " + users.first_name + " " + users.last_name + "<br/>";
		document.querySelector ("#users").appendChild (name);
	});
}

function showJanet (janet) {

	let name = document.createElement ("span");
	let avatar = document.createElement ("img");

	name.innerHTML = janet.first_name + " " + janet.last_name + "<br/>";
	avatar.src = janet.avatar;
	avatar.width = "150";

	document.querySelector ("#janet").appendChild (name);
	document.querySelector ("#janet").appendChild (avatar);
}