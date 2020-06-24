document.addEventListener("DOMContentLoaded", function() {

  const text = document.querySelector(".text");
  const colors = ["orange", "red", "green", "darkgreen", "cyan"];

  function tagSelection() {
    const selection = window.getSelection();
    let range = selection.getRangeAt(0);
    const text = range.toString();
    if (text[0] === " ") range.setStart(range.startContainer, range.startOffset + 1);
    if (text[text.length - 1] === " ") if (text[0] === " ") range.setEnd(range.endContainer, range.endOffset - 1);
    if (text !== "") {
      const span = document.createElement("strong")
      span.innerHTML = `<span class="tag" style="background-color: ${colors[Math.floor(5 * Math.random())]}">${range}</span>`
      range.deleteContents();
      range.insertNode(span)
    }
    selection.removeAllRanges();
  }

  text.addEventListener("mouseup", tagSelection);
});