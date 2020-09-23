window.addEventListener("DOMContentLoaded", main);

function main() {
  const inputElement = document.querySelector(".dropzone-input");
  const dropzoneElement = inputElement.closest(".dropzone");

  // DROPZONE EVENTS
  dropzoneElement.addEventListener("click", function() {
    inputElement.click();
  });

  inputElement.addEventListener("change", function() {
    if (inputElement.files.length > 0) updateThumbnail(inputElement.files[0]);
  });

  dropzoneElement.addEventListener ("dragover", function(e) {
    e.preventDefault();
    this.classList.add("dropzone-over");
  });

  ["dragleave", "dragend"].forEach(function(event) {
    dropzoneElement.addEventListener(event, function(e) {
      e.preventDefault();
      dropzoneElement.classList.remove("dropzone-over");
    });
  });

  dropzoneElement.addEventListener("drop", function(e) {
    e.preventDefault();
    console.log(e.dataTransfer.files);
    if (e.dataTransfer.files.length > 0) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(e.dataTransfer.files[0]);
    }
    dropzoneElement.classList.remove("dropzone-over");
  });
}

function updateThumbnail(file) {
  const thumbnail = document.querySelector(".dropzone-thumbnail");
  thumbnail.style.display = "block";
  thumbnail.textContent = file.name;
}