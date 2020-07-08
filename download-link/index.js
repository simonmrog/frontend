function saveFile() {
  // ask for the name of the file
  let filename = prompt("Name for the file to save:");
  // data.csv as name by default
  if (filename === "") filename = "data";
  const data = "title1,title2,title3\nvalue1,value2,value3\nvalue4,value5,value6";
  if (filename) {
    // blob object to create the url
    const csv = new Blob([data], { type: "text/csv" });
    const url = (window.webkitURL || window.URL).createObjectURL(csv);
    // creating temporary object to download the data
    const el = document.createElement("a");
    el.setAttribute("download", `${filename}.csv`);
    el.setAttribute("href", url);
    document.body.appendChild(el);
    el.click();
    // removing element and url object
    document.body.removeChild(el);
    (window.webkitURL || window.URL).revokeObjectURL(csv);
  }
}

const link = document.querySelector("#download_link");
link.addEventListener("click", saveFile);