const startButton = document.getElementById ("startButton");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

const gameLevel = document.getElementById ("level");
const gameScore = document.getElementById ("score");
const gameTopScore = document.getElementById ("top-score");
const MAX_LEVEL = 50;
var topScore = 0;


function startGame () {

    var game = new Game ();
}


function generateRandomNumber () {

    return (Math.floor (Math.random () * 4));
}


class Game  {

    constructor () {

        this.init = this.init.bind (this);
        this.verify = this.verify.bind (this);

        this.colors = {blue: blue, red: red, yellow: yellow, green: green};
        this.level = 1;
        this.score = 0;
        this.init ();
        this.generateSequence ();
        this.setScore ();
        this.nextLevel ();
    }


    init () {

        this.toggleStartButton ();
    }


    toggleStartButton () {

        if (startButton.classList.contains ("hide"))
            startButton.classList.remove ("hide");
        else
            startButton.classList.add ("hide");
    }


    generateSequence () {

        this.sequence = new Array(MAX_LEVEL).fill (0).map (generateRandomNumber);
    }


    nextLevel () {
        this.setLevelTitle ();
        this.removeClickEvents ();
        this.subLevel = 0;
        this.illuminateSequence ();
        this.addClickEvents ();
    }


    illuminateSequence () {

        for (let i=0; i < this.level; i++) {
            let color = this.toColor (this.sequence[i]);
            setTimeout (() => this.illuminateColor (color), 900 * i);
        }
    }


    illuminateColor (color) {

        this.colors[color].classList.add ("light");
        setTimeout (() => this.turnOffColor (color), 300);
    }


    turnOffColor (color) {

        this.colors[color].classList.remove ("light");
    }


    toColor (code) {

        switch (code) {

            case 0: return ("blue");
            case 1: return ("red");
            case 2: return ("yellow");
            case 3: return ("green");
        }
    }


    toCode (color) {

        switch (color) {

            case "blue": return (0);
            case "red": return (1);
            case "yellow": return (2);
            case "green": return (3);
        }
    }


    addClickEvents () {

        blue.addEventListener ("click", this.verify);
        red.addEventListener ("click", this.verify);
        yellow.addEventListener ("click", this.verify);
        green.addEventListener ("click", this.verify);
    }


    removeClickEvents () {

        blue.removeEventListener ("click", this.verify);
        red.removeEventListener ("click", this.verify);
        yellow.removeEventListener ("click", this.verify);
        green.removeEventListener ("click", this.verify);
    }


    verify (evt) {

        let color = evt.target.id;
        let colorCode = this.toCode (color);
        this.illuminateColor (color);
        if (colorCode == this.sequence[this.subLevel]) {
            this.subLevel++;
            this.score++;
            this.setScore ();
            if (this.subLevel == this.level) {
                this.level++;
                if (this.level > MAX_LEVEL)
                    this.winGame ();
                else
                    setTimeout (() => this.nextLevel (), 1000);
            }
        }
        else
            this.loseGame ();
    }


    setLevelTitle(){
        gameLevel.innerHTML = "<font color=\"white\"> Level: " + this.level + "</font>";
    }


    setScore() {
        gameScore.innerHTML = "<font color=\"white\"> Score: " + this.score + "</font>";
        if (this.score > topScore) {
            topScore = this.score;
            this.setTopScore();
        }
    }


    setTopScore() {
        gameTopScore.innerHTML = "<font color=\"white\"> Top Score: " + topScore + "</font>";
    }


    winGame () {

        swal ("", "You win! :)", "success");
        this.init ();
    }


    loseGame () {

        swal ("", "You lose :(", "error").then (() => {
            this.init ();
            this.removeClickEvents ();
        });
    }
}
