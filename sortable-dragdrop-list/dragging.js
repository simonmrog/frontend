function DragContainer(container) {
  this.container = container;
  this.draggableElements = [ ...document.querySelectorAll(".draggable")];
};

DragContainer.prototype.init = function() {

  function addDraggingClass() {
    this.classList.add("dragging");
  }

  function removeDraggingClass() {
    this.classList.remove("dragging");
  }

  function setDraggableElementsEvents(draggable) {

    // DRAG AND DROP LOGIC
    function handleDragging(e) {
      let target = draggable;
      const dragging = document.querySelector(".dragging");
      const elementCenter = draggable.offsetLeft + draggable.offsetWidth / 2;
      if (e.clientX > elementCenter) target = draggable.nextSibling;
      this.container.insertBefore(dragging, target);
    }

    draggable.addEventListener("dragstart", addDraggingClass);
    draggable.addEventListener("dragend", removeDraggingClass);
    draggable.addEventListener("dragover", handleDragging.bind(this));
  }

  this.draggableElements.forEach(draggable => setDraggableElementsEvents.call(this, draggable));
};
