// $(document).ready (function () {

//     let box = $("#box");

//     box.focus (function () {
//         $(this).css ("background", "green");
//         $("#button").css ("display", "none");
//     });

//     box.blur (function () {
//         $(this).css ("background", "blue");
//         $("#button").css ("display", "inline");
//         console.log ($(this).val ());
//     });
// });

let box = document.querySelector ("#box");

box.addEventListener ("focus", function () {
    this.style.background = "green";
    let button = document.querySelector ("#button");
    button.style.display = "none";
})

box.addEventListener ("blur", function () {

    this.style.background = "blue";
    let button = document.querySelector ("#button");
    button.style.display = "inline";
    console.log (this.value);
}); 