const player = require("./player");

function evilBot(){
    player.call(this);
};

evilBot.prototype.tellyourPlay = function(){
    return 1;
};

evilBot.prototype = player.prototype;


module.exports = evilBot;