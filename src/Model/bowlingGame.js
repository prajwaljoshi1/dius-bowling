class BowlingGame {

    constructor() {
        this.rolls = [];
        this.currentRoll = 0;
    };


    roll(pins) {
        this.rolls[this.currentRoll++] = Number(pins);
    };


    score() {

        var score = 0;
        var frameIndex = 0;
        var self = this;

        function ballsSumInFrame() {

            var ballsuminframe = self.rolls[frameIndex] + self.rolls[frameIndex + 1];
            if (isNaN(ballsuminframe)) ballsuminframe = 0;
            return ballsuminframe;

        }

        /*
         *Spare function: If in 2 tries, the bowler knocks down all the pins, it is a spare.
         * The scoring of a spare is the sum of the number of pins knocked down plus the number of
         * pins knocked down in the next bowl.
         */

        function isSpare() {

            var ballsuminframe = self.rolls[frameIndex] + self.rolls[frameIndex + 1];
            return ballsuminframe === 10;

        }

        function spareBonus() {

            //     console.log("spareBonus:"+self.rolls[frameIndex + 2]);
            if (isNaN(self.rolls[frameIndex + 2])) {
                self.rolls[frameIndex + 2] = 0;
            }
            return self.rolls[frameIndex + 2];
        }

        /*
         * Strike function:
         * If in one try, the bowler knocks down all the pins, it is a strike.
         * The scoring of a strike is the sum of the number of pins knocked down
         * plus the number of pins knocked down in the next two bowls.
         */

        function isStrike() {

            return self.rolls[frameIndex] === 10;
        }


        function strikeBonus() {

            var strikeBonus = 0  ;

            if (self.rolls[frameIndex + 2]!==10){
                strikeBonus = self.rolls[frameIndex + 2] + self.rolls[frameIndex + 3];
            } else {
                strikeBonus = self.rolls[frameIndex + 2] + self.rolls[frameIndex + 4];
            }

            if (isNaN(strikeBonus)) strikeBonus = 0;
            //  console.log("strikeBonus:"+strikeBonus);
            return strikeBonus;
        }



        for (var frame = 1; frame <=9; frame++) {

            if (isStrike()) {
                score += 10 + strikeBonus();
                //console.log("freme:"+frame+":strikeBonus:"+strikeBonus());
                frameIndex += 2;
            } else if (isSpare()) {
                score += 10 + spareBonus();
                //console.log("freme:"+frame+":SpareBonus:"+spareBonus());
                frameIndex += 2;
            } else {
                score += ballsSumInFrame();
                // console.log("freme:"+frame+":ballsSum:"+ballsSumInFrame());
                frameIndex += 2;
            }


        }

        /*
         * In the last frame, if the bowler bowls a spare, they get another bowl.
         * The score of this frame is the sum of the three bowls.
         *
         * In the last frame, if the bowler bowls a strike, they get another 2 bowls.
         * The score of this frame is the sum of the three bowls
         */

        if(isStrike()) {

            score += 10 +self.rolls[frameIndex +1 ] + self.rolls[frameIndex +2 ]

        }else if (isSpare()){
            score += 10 + self.rolls[frameIndex +2 ]

        }else {
            score += +self.rolls[frameIndex ] +self.rolls[frameIndex +1 ]
        }

        return score;
    }


}


exports.BowlingGame = BowlingGame;
