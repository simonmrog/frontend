"use strict";

window.onload = () => {
  const todoListElement = renderer.createElement(TodoList);
  renderer.render(todoListElement, document.querySelector("#app"));
};
