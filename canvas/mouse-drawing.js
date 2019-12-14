var drawingArea = document.getElementById("drawingArea");
var context = drawingArea.getContext("2d");
var state = 0; //whether the mouse is pressed or not

function drawPoint (context, x, y, color) {

  var pointSize = 2;

  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(x, y);
  context.arc (x, y, pointSize, 0, 2 * Math.PI, true);
  context.fill();
  context.stroke ();
  context.closePath();
}

function stateOn() {
  state = 1;
}

function stateOff() {
  state = 0;
}

function draw (mouseEvent) {

  if (state == 1) {
    var init_position = drawingArea.getBoundingClientRect();
    var x = mouseEvent.clientX - init_position.left;
    var y = mouseEvent.clientY - init_position.top;
    drawPoint (context, x, y, "black");
  }
}

document.addEventListener ("mousedown", stateOn);
document.addEventListener ("mouseup", stateOff);
document.addEventListener ("mousemove", draw);
