import { IPosition, IVelocity } from "./interfaces/position.js";

export const BOARD_SIZE = {
  x: 500,
  y: 500
}

export const getRandomPosition = (): IPosition => ({
  x: Math.floor(Math.random() * BOARD_SIZE.x),
  y: Math.floor(Math.random() * BOARD_SIZE.y)
});

export const getRandomVelocity = (): IVelocity => ({
  x: Math.floor(Math.random() * 10),
  y: Math.floor(Math.random() * 10),
});
