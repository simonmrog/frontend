window.addEventListener ("DOMContentLoaded", function () {
   
   let topnavButton = document.querySelector (".topnav-icon");
   

   topnavButton.addEventListener ("click", function () {
      
      let menuItems = document.querySelectorAll (".topnav a");

      for (let i=0; i<menuItems.length; i++) {
         let item = menuItems[i];
         if (item.style.display == "block") {
            item.style.display = "none";
            item.style.opacity = "0";
         }
         else {
            item.style.display = "block";
            item.style.opacity = "1";
         }
      }
   });

});