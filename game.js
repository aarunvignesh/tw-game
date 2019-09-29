const util = require("util"),
    kindBot = require("./kindbot"),
    evilBot = require("./evilbot"),
    copyCatBot = require("./copycatbot"),
    player = require("./player"),
    {chances, CHEAT, COOPERATE} = require("./contants"),
    rule = require("./rule");


function game(player_1, player_2){

    this.player_1 = player_1;
    this.player_2 = player_2;
};

game.prototype.start = function(rounds = 0){

    for(var i=0; i < rounds; i++){
        
        console.log("\n>>>>  Round : "+ (i+1));

        const p1_spell = chances[this.player_1.tellyourPlay()], p2_spell =  chances[this.player_2.tellyourPlay()];
        
        let [p1_score, p2_score] = rule(p1_spell, p2_spell);

        this.player_1.addScore(p1_score);
        this.player_2.addScore(p2_score);

        console.log(`P1 : ${p1_spell} P2 : ${p2_spell}`);
        console.log(`P1 : ${this.player_1.getScore()} P2 : ${this.player_2.getScore()}`);
    }
};

game.prototype.printwhoWins = function(){

    if(this.player_1.getScore() == this.player_2.getScore()){
        console.log("Draw");
        return;
    }

    console.log(this.player_1.getScore() > this.player_2.getScore() ? "Player 1 wins": "Player 2 Wins");
};


function main(){

    let player_1 = new player()
       , player_2 = new copyCatBot();

    let gameInstance = new game(player_1, player_2);

    gameInstance.start(5);

    gameInstance.printwhoWins();
}

main();