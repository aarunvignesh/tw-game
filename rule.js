const {chances, CHEAT, COOPERATE} = require("./contants");

function rule(p1_spell, p2_spell){
    if(p1_spell == p2_spell){
        
        if(p1_spell == COOPERATE){
            return [2,2];
        }
        else{
            return [0,0];
        }
    }
    else{

        if(p1_spell == COOPERATE){
            return [-1,3];
        }
        else{
            return [3, -1];
        }

    }
}

module.exports = rule;