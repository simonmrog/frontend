window.addEventListener ("DOMContentLoaded", function (event) {

   let button = document.querySelector (".nav-button");
   let links = document.querySelectorAll (".link");

   button.addEventListener ("click", function (event) {
      
      links.forEach (function (link) {
         link.classList.toggle ("hidden");
      });
   })
});