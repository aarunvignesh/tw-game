const player = require("./player"),
    {CHEAT} = require("./contants");
    util = require("util");

function evilBot(){
    player.call(this);
};

evilBot.prototype.tellyourPlay = function(){
    return CHEAT;
};

util.inherits(evilBot, player);


module.exports = evilBot;