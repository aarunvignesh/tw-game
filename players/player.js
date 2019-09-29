const {chances} = require("./../contants");

function player(name=""){
    this.score = 0;
    this.opponentMove = null;
    this.name = name;
}

player.prototype.tellyourPlay = function(){
    return chances[Math.round(Math.random())];
};

player.prototype.setopponentMove = function(move){
    this.opponentMove = move;
};

player.prototype.addScore = function(score = 0){
    this.score += score;
};

player.prototype.getScore = function(){
    return this.score;
};

module.exports = player;