"use strict";

load ();


//FUNCTIONS
async function load () {

  let url = "https://yts.am/api/v2/list_movies.json?genre=";

  async function getData (url, genre) {
    const response = await fetch (url + genre);
    const data = await response.json ();
    return (data);
  }

  let actionList = await getData (url, "action");
  let dramaList = await getData (url, "drama");
  let animationList = await getData (url, "animation");
 

  console.log (actionList, dramaList, animationList);
}