"use strict";

var url = "https://yts.am/api/v2/list_movies.json?=genre=action";
cacheExists (url);


//FUNCTIONS 

async function cacheExists (data) {

  var cacheList = window.localStorage.getItem ("movie_list");
  if (cacheList == null) {
    cacheList = await saveData (url);
    console.log ("Data saved correctly");
  }

  console.log (JSON.parse(cacheList));
}


async function saveData (url) {

  let response = await fetch (url);
  let data = await response.json ();
  window.localStorage.setItem ("movie_list", JSON.stringify (data));
  return (JSON.stringify (data));
}