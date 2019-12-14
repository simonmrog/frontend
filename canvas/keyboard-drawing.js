var drawing = document.getElementById("drawing");
var draw_context = drawing.getContext("2d");
var x = 150;
var y = 150;

var keys = {

  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

function draw_line (draw_context, x1, y1, x2, y2, color) {

  draw_context.beginPath();
  draw_context.strokeStyle = color;
  draw_context.lineWidth = 3;
  draw_context.moveTo(x1, y1);
  draw_context.lineTo(x2, y2);
  draw_context.stroke();
  draw_context.closePath();
}

function draw (event) {

  var dx = 10;
  var dy = 10;

  switch (event.keyCode) {

    case keys.UP:
      if (y >= 10) {
        draw_line (draw_context, x, y, x, y - dy, "blue");
        y = y - dy;
      }
    break;

    case keys.DOWN:
      if (y <= 290) {
        draw_line (draw_context, x, y, x, y + dy, "blue");
        y = y + dy;
      }
    break;

    case keys.LEFT:
      if (x >= 10) {
        draw_line (draw_context, x - dx, y, x, y, "blue");
        x = x - dx;
      }
    break;

    case keys.RIGHT:
      if (x <= 290) {
        draw_line (draw_context, x, y, x + dx, y, "blue");
        x = x + dx;
      }
    break;

    default:
    break;
  }
}

draw_line (draw_context, x, y, x + 2, y + 2, "blue");
document.addEventListener("keydown", draw);
