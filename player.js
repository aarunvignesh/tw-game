function player(){
    this.score = 0;
}

player.prototype.tellyourPlay = function(){
    return Math.round(Math.random());
};

player.prototype.addScore = function(score = 0){
    this.score += score;
};

player.prototype.getScore = function(){
    return this.score;
};

module.exports = player;