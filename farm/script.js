function random (min, max) {

  var n = Math.floor (Math.random() * (max - min + 1)) + min;
  return (n);
}

function loadBackground () {
  background.flag = true;
  draw ();
}

function loadCow () {
  cow.flag = true;
  draw ();
}

function loadPig () {
  pig.flag = true;
  draw ();
}

function loadChicken () {
  chicken.flag = true;
  draw ();
}

function generatePositions (xCows, yCows, xChickens, yChickens) {

  for (var i=0; i<xCows.length; i++) {
    xCows[i] = random (1, 5) * 80;
    yCows[i] = random(1, 5) * 80;
  }

  for (var i=0; i<xChickens.length; i++) {
    xChickens[i] = random (1, 5) * 80;
    yChickens[i] = random(1, 5) * 80;
  }
}

function draw () {

  if (background.flag) {
    context.drawImage (background.image, 0, 0);
  }

  if (cow.flag) {
    for (var i=0; i<xCows.length; i++)
      context.drawImage (cow.image, xCows[i], yCows[i]);
  }

  if (pig.flag) {
      context.drawImage (pig.image, x, y);
  }

  if (chicken.flag) {
    for (var i=0; i<xChickens.length; i++)
      context.drawImage (chicken.image, xChickens[i], yChickens[i]);
  }
}

function move (event) {

  var dx = 10;
  var dy = 10;

  switch (event.keyCode) {

    case keys.UP:
      if (y >= 0) {
        draw ();
        y = y - dy;
      }
    break;

    case keys.DOWN:
      if (y <= 410) {
        draw ();
        y = y + dy;
      }
    break;

    case keys.LEFT:
      if (x >= 0) {
        draw ();
        x = x - dx;
      }
    break;

    case keys.RIGHT:
      if (x <= 410) {
        draw ();
        x = x + dx;
      }
    break;
  }
}

var vp = document.getElementById("villaplatzi");
var context = vp.getContext("2d");

//Coordinates of the moving pig
var x = 210, y = 250;

//positions of cows and chicken
var xCows = [], yCows = [];
xCows.length = yCows.length = random (0, 10);
var xChickens = [], yChickens = [];
xChickens.length = yChickens.length = random (0, 10);
generatePositions (xCows, yCows, xChickens, yChickens);

//Creating objects to draw
var background = {
  src: "tile.png",
  loaded: false
};

var cow = {
  src: "cow.png",
  loaded: false,
};

var pig = {
  src: "pig.png",
  loaded: false
};

var chicken = {
  src: "chicken.png",
  loaded: false
};

var keys = {

  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//Creating events to draw
background.image = new Image();
background.image.src = background.src;
background.image.addEventListener("load", loadBackground);

cow.image = new Image();
cow.image.src = cow.src;
cow.image.addEventListener("load", loadCow);

pig.image = new Image();
pig.image.src = pig.src;
pig.image.addEventListener("load", loadPig);

chicken.image = new Image();
chicken.image.src = chicken.src;
chicken.image.addEventListener("load", loadChicken);

document.addEventListener("keydown", move);
