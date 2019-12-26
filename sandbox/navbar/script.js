document.addEventListener ("DOMContentLoaded", function () {

   let menuButton = document.getElementById ("menu-button");
   
   menuButton.addEventListener ("click", function () {
      
      let links = document.querySelectorAll ("nav a");

      links.forEach (function (element) {
         element.classList.toggle ("dissapears");
      });
   });

});