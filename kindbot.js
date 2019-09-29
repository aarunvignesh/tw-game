const player = require("./player"),
        util = require("util");

function kindBot(){
    player.call(this);
};

kindBot.prototype.tellyourPlay = function(){
    return 0;
};

util.inherits(kindBot, player);

module.exports = kindBot;