document.addEventListener ("DOMContentLoaded", function () {

   function loadJS (url, e) {

      let element = document.querySelector (e);
      let req = new XMLHttpRequest ();

      req.open ("GET", url); 
      req.send ();

      //EVENTS
      req.addEventListener ("load", function () {
         element.innerHTML = req.responseText;
      });

      // req.onreadystatechange = function () {
      //    if (req.readyState === 4)
      //       element.innerHTML = req.responseText;
      // }
   }

   //USING JQUERY
   // $("#data").load ("https://reqres.in/api/users?page=2");
   
   //USING PURE JAVASCRIPT
   loadJS ("https://reqres.in/api/users?page=2", "#data");

});