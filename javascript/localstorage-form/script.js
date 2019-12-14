var addButton = document.querySelector ("#addMovie");
var deleteButton = document.querySelector ("#deleteMovie");
showMovieList ();


//FUNCTIONS
function showMovieList () {

	for (let i in localStorage) {
		if (typeof (localStorage[i]) == "string") {
			var li = document.createElement ("li");
			li.append (localStorage[i]);
			document.querySelector ("#movie-list").append (li);
		}
	}
}


addButton.addEventListener ("click", function () {

	var movie = document.querySelector ("#field").value;

	if (movie.length > 0) {
		localStorage.setItem (movie, movie);
	}
	else
		alert ("Enter some data");
});


deleteButton.addEventListener ("click", function () {

	var movie = document.querySelector ("#field").value;
	console.log (movie);
	if (movie.length > 0)
		localStorage.removeItem (movie);
	else
		alert ("Enter some data");
});