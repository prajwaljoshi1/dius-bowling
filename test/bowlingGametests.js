const myModule = require('../src/Model/bowlingGame');
const expect = require('expect.js');


describe("BowlingGame", function() {
    var game;

    beforeEach(function(){
        game = new myModule.BowlingGame();
    });

    function rollMany (n, pins) {
        for (var i = 0; i < n; i++) {
            game.roll(pins)
        }
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    function rollStrike() {
        game.roll(10);
        game.roll(0);
    }

    it("should handle gutter game => score :0 ", function() {
        rollMany(20, 0);
        expect(game.score()).to.equal(0);
    });

    it("should handle all ones => score :20 ", function() {
        rollMany(20, 1);
        expect(game.score()).to.equal(20);
    });

    it("should handle all twos => score :40", function() {
        rollMany(20, 2);
        expect(game.score()).to.equal(40);
    });

    it("should handle one spare  => score :16", function() {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).to.equal(16);
    });

    it("should handle two spares => score :31", function() {
        rollSpare();
        game.roll(3);
        game.roll(5);
        rollSpare();
        rollMany(14, 0);
        expect(game.score()).to.equal(31);
    });

    it("should handle one strike => score :24", function() {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.score()).to.equal(24);

    });

    it("should handle two strike => score :46", function() {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollStrike();
        game.roll(2);
        game.roll(4);
        rollMany(12, 0);
        expect(game.score()).to.equal(46);
    });


    it("should handle two spares + three strikes => score :70", function() {
        rollSpare();
        game.roll(3);
        game.roll(4);
        rollStrike();
        rollSpare();
        rollStrike();
        rollMany(11, 0);
        expect(game.score()).to.equal(70);
    });

    it("should handle Spare in the last frame, get extra game's score => score :14", function() {
        rollMany(18, 0);
        game.roll(4);
        game.roll(6);
        game.roll(4);
        expect(game.score()).to.equal(14);
    });



    it("should handle 10 strike + two gutter balls => score :270", function() {

        for(var i =1 ;i<= 9; i++){
            rollStrike();
        }

        rollMany (1,10) ;
        rollMany (2,0) ;


        expect(game.score()).to.equal(270);
    });



    it("should handle a perfect game (12 strike) => score :300", function() {

        for(var i =1 ;i<= 9; i++){
            rollStrike();
        }

        rollMany (3,10) ;


        expect(game.score()).to.equal(300);
    });


});