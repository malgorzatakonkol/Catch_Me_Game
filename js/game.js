var Furry = require("./furry.js");
var Coin = require("./coin.js");

function Game() {
    this.board = document.querySelectorAll("#board div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.idSetInterval = 0;
    this.index = function (x, y) {
        return x + (y * 10);
    };
    this.showFurry = function () {
        this.hideVisibleFurry();
        if (this.board[this.index(this.furry.x, this.furry.y)] != null) { //warunek ze tutaj jest znaleziony element //kod sie wysypywał gdy funkcja nie mogla znależc elementu, gdy y był znacznie mniejszy niz x
            this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
        }
    };

    this.showCoin = function () {
        console.log('test');
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };

    this.moveFurry = function () {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }


        this.showFurry();
        this.colisionCoin();
        this.gameOver();


    };


    this.startGame = function () {
        var self = this;
        this.idSetInterval = setInterval(function () {
            self.moveFurry();
        }, 250)
    };

    this.hideVisibleFurry = function () {
        var deleteFurry = document.querySelector(".furry");
        if (deleteFurry != null) {
            deleteFurry.classList.remove("furry");
        }
    };

    this.move = function (event) {
        console.log(event.which);
        switch (event.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "down";
                break;
            case 38:
                this.furry.direction = "up";
                break;
            default:
                break;
        }
    };

    this.colisionCoin = function () {
        if (this.index(this.furry.x, this.furry.y) === this.index(this.coin.x, this.coin.y)) {
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
            this.score += 1;
            document.querySelector("strong").innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    };

    this.gameOver = function () {
        // console.log(this.furry.x);
        // console.log(this.furry.y);
        if (this.furry.x < 0 || this.furry.y < 0 || this.furry.x > 9 || this.furry.y > 9) {
            console.log("to jest to");
            clearInterval(this.idSetInterval);

            this.hideVisibleFurry();

            alert("Game over");
        }
    }


}

module.exports = Game;