function saveFile(e) {
  // get this from an API call or another method
  const data = "title1,title2,title3\nvalue1,value2,value3\nvalue4,value5,value6";
  const filename = prompt("Name for the file to save:");
  if (filename) {
    console.log("entre")
    const csv = new Blob([data], {type: "text/csv"});
    const url = (window.webkitURL || window.URL).createObjectURL(csv);
    this.download = `${filename}.csv`;
    this.href = url;
    // removes the url object from memory
    (window.webkitURL || window.URL).revokeObjectURL(csv);
  } else {
    e.preventDefault();
  }
}

const link = document.querySelector("#download_link");
link.addEventListener("click", saveFile);