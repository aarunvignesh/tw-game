const player = require("./player"),
    util = require("util");

function evilBot(){
    player.call(this);
};

evilBot.prototype.tellyourPlay = function(){
    return 1;
};

util.inherits(evilBot, player);


module.exports = evilBot;