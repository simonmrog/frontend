var drawing = document.getElementById("drawing");
var draw = drawing.getContext("2d");
var x;

function draw_line (x1, y1, x2, y2, color) {

  draw.beginPath();
  draw.strokeStyle = color;
  draw.moveTo(x1, y1);
  draw.lineTo(x2, y2);
  draw.stroke();
  draw.closePath();
}

for (x=0; x<200; x = x + 10)
  draw_line (0, x, x + 10, 200, "red");

for (x=200; x>0; x = x - 10)
  draw_line (200, 200 - x, x - 10, 200, "blue");

for (x=200; x>0; x = x - 10)
  draw_line (x, 0, 0, 200 - x + 10, "green");

for (x=0; x<200; x = x + 10)
  draw_line (x, 0, 200, x + 10, "yellow");
