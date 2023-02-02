import Player from "./player.js";
import PlayerTypes from "./types.js";

const canvas = document.querySelector("#canvas")!;

const warrior = new Player("W", PlayerTypes.WARRIOR);

canvas.addEventListener("click", (e: any) => {
  warrior.attack();
});

window.addEventListener("keydown", (e: any) => {
  let displacement = null;

  if (e.keyCode === 37) {
    displacement = {
      x: -1,
      y: 0
    }
  } else if (e.keyCode === 39) {
    displacement = {
      x: 1,
      y: 0
    }
  } else if (e.keyCode === 40) {
    displacement = {
      x: 0,
      y: 1
    }
  } else if (e.keyCode === 38) {
    displacement = {
      x: 0,
      y: -1
    }
  }

  if (displacement) {
    warrior.move(displacement);
  }
});
