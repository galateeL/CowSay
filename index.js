const infoWilder = require('./information');
/*console.log(`Je suis ${infoWilder.wilder.name}`);*/

const cowsay = require("cowsay");
console.log(cowsay.say ({
    text : `I'm ${infoWilder.wilder.name} from ${infoWilder.wilder.campus}`,
    e : "oO",
    T : "U "
}));


