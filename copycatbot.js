const player = require("./player");

function copyCatBot(){
    player.call(this);
    this.prevScore = null;

    this.prevChoice = null;
};

let cmp_score = (score, prevScore)=>{
    return score < 0 ? Math.abs(prevScore) - Math.abs(score) : score - prevScore;
};

copyCatBot.prototype.tellyourPlay = function(){
    if(!isNull(this.prevScore)){
       switch(cmp_score(this.score - this.prevScore)){
           case 0:
                return 0;
           case 1:
                return this.prevChoice == 0 ? 1 : 0;
           case 2:
                return 1;
       }
    }
    this.prevChoice = this.score;
    return 1;
};

copyCatBot.prototype.addScore = function(){
    this.prevScore = score;
    this.score += score;
};
copyCatBot.prototype = player.prototype;

module.exports = copyCatBot;
