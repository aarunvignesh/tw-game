const player = require("./player"),
    {chances, CHEAT, COOPERATE} = require("./contants"),
    rule = require("./rule"),
    util = require("util");

function copyCatBot(){
    player.call(this);
    this.prevScore = null;
    this.prevChoice = null;
};

let calculateSpell = (prevChoice, prevScore, score)=>{

    return possibleChoice = chances.findIndex((x)=>{
        return rule(chances[prevChoice], x)[0] + prevScore == score;
    });
};



copyCatBot.prototype.tellyourPlay = function(){
    if(this.prevChoice != null){
       const spell = calculateSpell(this.prevChoice, this.prevScore, this.score);
       this.prevChoice = spell;
       return spell;
    }
    this.prevChoice = 0;
    return 0;
};

copyCatBot.prototype.addScore = function(score){
    if(this.prevScore == null){
        this.prevScore = 0;
    }
    else{
        this.prevScore = this.score;
    }
    this.score += score;
};


util.inherits(copyCatBot, player);

module.exports = copyCatBot;
