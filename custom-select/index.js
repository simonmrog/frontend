const selected = document.querySelector(".selected");
const dropdown = document.querySelector(".dropdown-list");
const dropdownItems = document.querySelectorAll(".dropdown-item");

selected.addEventListener("click", function() {
  console.log("clicked");
  dropdown.classList.toggle("visible");
});

dropdown.addEventListener("blur", function() {
  dropdown.classList.toggle("visible");

})

dropdownItems.forEach(function(item) {
  item.addEventListener("click", function(e) {
    dropdown.classList.toggle("visible");
    console.log(event.target.value);
  })
});