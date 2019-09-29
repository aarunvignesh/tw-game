const copycatBot = require("./copycatBot"),
{chances, CHEAT, COOPERATE} = require("./contants"),
rule = require("./rule"),
util = require("util");

function grudgerBot(){
    copycatBot.call(this);
    this.ismoodGood = true;
};

grudgerBot.prototype.tellyourPlay = function(){

    if(this.ismoodGood){

        if(this.prevChoice != null){

            const spell = this.calculateSpell(this.prevChoice, this.prevScore, this.score);
            this.prevChoice = chances[spell];

            if(this.prevChoice == CHEAT){
                this.ismoodGood = false;
            }

            return this.prevChoice;

        }

        this.prevChoice = COOPERATE;
        return COOPERATE;
    }
    else{
        return CHEAT;
    }
   
};


util.inherits(grudgerBot, copycatBot);

module.exports = grudgerBot;
