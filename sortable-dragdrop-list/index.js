window.addEventListener("DOMContentLoaded", function() {

  const colors = ["darkgreen", "orange", "darkcyan", "darkblue", "indigo"];
  const container = document.querySelector(".main-wrapper");

  function createDraggableBoxes() {
    const length = Math.floor((15 - 5) * Math.random() + 5);
    for (let i=0; i < length; i++) {
      const div = document.createElement("div");
      div.textContent = i + 1;
      div.setAttribute("draggable", true)
      div.classList.add("box");
      div.classList.add("draggable");
      container.appendChild(div);
    }
  }
  
  function setWidthToBoxes() {
    document.querySelectorAll(".box").forEach(function(box) {
      const n = Math.random();
      box.style.width = `${Math.floor((500 - 200) * n + 200)}px`;
      box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
  }
  
  createDraggableBoxes();
  setWidthToBoxes();

  const dragContainer = new DragContainer(container);
  dragContainer.init();
});
