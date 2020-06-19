const boxes = document.querySelectorAll(".box");
let zIndex = 0;

function updatePosition(e) {
  this.style.left = `${e.pageX - this.deltaX}px`;
  this.style.top = `${e.pageY - this.deltaY}px`;
}

boxes.forEach(function(box) {
  this.deltaX = 0;
  this.deltaY = 0;

  box.addEventListener("mousedown", function(e) {
    this.deltaX = e.pageX - this.offsetLeft;
    this.deltaY = e.pageY - this.offsetTop;
    this.style.zIndex = zIndex++;

    this.addEventListener("mousemove", updatePosition);

    window.addEventListener("mouseup", function(e) {
      box.removeEventListener("mousemove", updatePosition);
    })
  });
});

