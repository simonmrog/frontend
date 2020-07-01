document.addEventListener("DOMContentLoaded", function() {

  const text = document.querySelector(".text");
  const colors = ["orange", "red", "green", "darkgreen", "cyan"];
  let labelsNumber = 0;

  function removeTag(e) {
    const el = this;
    const remove = confirm("Do you want to remove this tag?");
    if (remove) {
      const textContent = el.textContent.replace("TAG", "").trim();
      text.innerHTML = text.innerHTML.replace(el.outerHTML, textContent);
    }
  }

  function addTagEvents() {
    const tags = document.querySelectorAll("mark.tag");
    tags.forEach(function(tag) {
      tag.addEventListener("click", removeTag);
    });
  }

  function tagSelection() {
    const selection = window.getSelection();
    let range = selection.getRangeAt(0);
    const text = range.toString();
    if (text[0] === " ") range.setStart(range.startContainer, range.startOffset + 1);
    if (text[text.length - 1] === " ") range.setEnd(range.endContainer, range.endOffset - 1);
    if (text !== "") {
      const span = document.createElement("mark")
      span.setAttribute("class", "tag");
      span.setAttribute("id", labelsNumber++);
      span.style.backgroundColor = colors[Math.floor(5 * Math.random())];
      span.innerHTML = range + "<span> TAG</span>";
      range.deleteContents();
      range.insertNode(span)
    }
    selection.removeAllRanges();
    addTagEvents();
  }

  text.addEventListener("mouseup", tagSelection);
});
