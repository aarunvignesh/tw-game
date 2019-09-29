const player = require("./player"),
        {COOPERATE} = require("./contants"),
        util = require("util");

function kindBot(){
    player.call(this);
};

kindBot.prototype.tellyourPlay = function(){
    return COOPERATE;
};

util.inherits(kindBot, player);

module.exports = kindBot;