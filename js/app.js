// require("./coin.js");
// require("./furry.js");
// require("./game.js");
//]

var Game = require("./game.js");


// console.log(Game);
document.addEventListener("DOMContentLoaded", function () {


    var newGame = new Game();
    newGame.showFurry();
    newGame.showCoin();
    newGame.startGame();

    document.addEventListener("keydown", function (event) {
        newGame.move(event);
    });

});
