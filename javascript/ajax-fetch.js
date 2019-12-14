"use strict";

var url = "https://randomuser.me/api/";

$.ajax (url, {

  method: "GET",
  success: function (data) {
    console.log (data);
  },
  error: function (error) {
    console.log (error);
  } 
});

fetch (url)
  .then (function (response) {
    return (response.json ());
  })
  .then (function (data) {
    console.log (data);
  })
  .catch (function () {
    console.log ("Error reading data.");
  });