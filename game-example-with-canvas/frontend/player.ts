import { getRandomPosition, getRandomVelocity } from "./defaults.js";
import { ICoordinated, IPosition, IVelocity } from "./interfaces/position.js";

class Player {
  name: string;
  type: number;
  _position: IPosition = getRandomPosition();
  _velocity: IVelocity = getRandomVelocity();

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(name: string, type: number) {
    this.name = name;
    this.type = type;

    this.canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.name, this._position.x, this._position.y);
  }

  public get position() {
    return this._position;
  }

  public setDisplacement(displacement: ICoordinated) {
    return {
      x: this._position.x + this._velocity.x * displacement.x,
      y: this._position.y + this._velocity.y * displacement.y
    }
  }

  public move(displacement: ICoordinated) {
    this._position = this.setDisplacement(displacement);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillText(this.name, this._position.x, this._position.y);
    console.log(this.name,  this._position.x, this._position.y);
  }

  public attack() {
    console.log("The warrior used his sword to attack!");
  }
}

export default Player;
