document.addEventListener("DOMContentLoaded", function() {

  const text = document.querySelector(".text");

  function tagSelection() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const text = range.toString();
    if (text !== "") {
      const span = document.createElement("strong")
      span.innerHTML = `<span class="tag">${range}</span>`
      range.deleteContents();
      range.insertNode(span)
    }
  }

  text.addEventListener("mouseup", tagSelection);
});