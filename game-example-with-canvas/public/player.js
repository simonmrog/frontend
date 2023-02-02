import { getRandomPosition, getRandomVelocity } from "./defaults.js";
class Player {
    constructor(name, type) {
        this._position = getRandomPosition();
        this._velocity = getRandomVelocity();
        this.name = name;
        this.type = type;
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.name, this._position.x, this._position.y);
    }
    get position() {
        return this._position;
    }
    setDisplacement(displacement) {
        return {
            x: this._position.x + this._velocity.x * displacement.x,
            y: this._position.y + this._velocity.y * displacement.y
        };
    }
    move(displacement) {
        this._position = this.setDisplacement(displacement);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillText(this.name, this._position.x, this._position.y);
        console.log(this.name, this._position.x, this._position.y);
    }
    attack() {
        console.log("The warrior used his sword to attack!");
    }
}
export default Player;
