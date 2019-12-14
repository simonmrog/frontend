document.body.style.cursor = "none";
document.addEventListener ("mousemove", function () {

    let ball = document.querySelector ("#ball");
    ball.style.left = (event.clientX) + "px";
    ball.style.top = (event.clientY) + "px";

    // let ball = $("#ball");
    // ball.css ("left", event.clientX);
    // ball.css ("top", event.clientY);
});