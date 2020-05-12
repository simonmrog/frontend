window.onload = () => {
  document.querySelectorAll(".checkbox").forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      console.log(this.checked);
    });
  });
};