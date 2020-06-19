const sources = document.querySelectorAll("[draggable='true']");
const targets = document.querySelectorAll(".box");

const dragstart = function(e) {
  try {
    e.dataTransfer.setData("text/plain", e.target.id);
  } catch (err) {
    e.dataTransfer.setData("Text", e.target.id);
  }
};

const dropped = function(e) {
  let id;
  cancel(e);
  try {
    id = e.dataTransfer.getData("text/plain");
  } catch(err) {
    id = e.dataTransfer.getData("Text");
  }
  e.target.appendChild(document.querySelector("#" + id));
};

const cancel = function(e) {
  e.preventDefault();
  e.stopPropagation();
}

sources.forEach(function(source) {
  addEventListener("dragstart", dragstart);
});

targets.forEach(function(target) {
  target.addEventListener("drop", dropped);
  target.addEventListener("dragenter", cancel);
  target.addEventListener("dragover", cancel);
});
