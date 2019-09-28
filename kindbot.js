const player = require("./player");

function kindBot(){
    player.call(this);
};

kindBot.prototype.tellyourPlay = function(){
    return 1;
};

kindBot.prototype = player.prototype;

module.exports = kindBot;