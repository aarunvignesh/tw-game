const util = require("util"),
    kindBot = require("./players/kindbot"),
    evilBot = require("./players/evilbot"),
    copyCatBot = require("./players/copycatbot"),
    player = require("./players/player"),
    grudgerBot = require("./players/grudgerbot"),
    game = require("./game");




function getPlayerInstance(type){
    switch(type){
        case "KindBot":
            return new kindBot();
        case "EvilBot":
            return new evilBot();
        case "CopyCatbot":
            return new copyCatBot();
        case "GrudgerBot":
            return new grudgerBot();
    }
}

function tournament(teams){
    teams = ["KindBot","EvilBot","CopyCatbot","GrudgerBot"];

    let scoreSheet = {};

    teams.forEach(player => scoreSheet[player] = 0);

    match_list_creator(teams).forEach((match)=>{

       let  player_1 = getPlayerInstance(match[0]),
            player_2 = getPlayerInstance(match[1]);
       
       console.log(match[0] + " vs " + match[1]);

       let gameInstance = new game(player_1, player_2);
       
       gameInstance.start(2);
       
       gameInstance.printwhoWins();

       scoreSheet[match[0]] += gameInstance.getPlayerOneScore();

       scoreSheet[match[1]] += gameInstance.getPlayerTwoScore();

    });

    console.log(scoreSheet);

};

let match_list_creator = function(teams){
    return merged = [].concat.apply([], teams.map((player_1, index)=>{
        return teams.slice(index+1).map(player_2 => [player_1, player_2]);
    }).filter(x => x.length > 0));
};

tournament();