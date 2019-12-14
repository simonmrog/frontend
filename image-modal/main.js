window.addEventListener ("DOMContentLoaded", function () {

   let img = document.querySelector ("#modal-link");
   let modal = document.querySelector ("#modal");
   let close = document.querySelector ("#close");
   let modalContent = document.querySelector ("#modal-content");
   let caption = document.querySelector ("#caption");

   img.addEventListener ("click", function () {

      modalContent.src = this.src;
      caption.innerHTML = this.alt;
      modal.style.display = "block";

   });

   close.addEventListener ("click", function () {
      modal.style.display = "none";
   });

});