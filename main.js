const util = require("util"),
    kindBot = require("./players/kindbot"),
    evilBot = require("./players/evilbot"),
    copyCatBot = require("./players/copycatbot"),
    player = require("./players/player"),
    grudgerBot = require("./players/grudgerbot"),
    game = require("./game");



function main(){

let team_1 = new kindBot("KindBot"),
    team_2 = new evilBot("EvilBot");

    let gameInstance = new game(team_1, team_2);

    gameInstance.start(3);

    gameInstance.printwhoWins();
}

main();