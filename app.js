'use strict';

const myModel = require('./src/Model/bowlingGame');
var readlineSync = require('readline-sync');



main();


function main() {

    var game = new myModel.BowlingGame();

    for (var i = 1 ; i<= 21  ;i++) {
        // Wait for user's response.
        var pins = readlineSync.question(' Number of Pins Knocked Down at No [' + i + '] bowling ball :');
        game.roll(pins);

    }

    console.log("Final Score="+game.score());

}