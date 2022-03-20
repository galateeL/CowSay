const infoWilder = require('./information');

const cowsay = require("cowsay");
console.log(cowsay.say ({
    text : `I'm ${infoWilder.wilder.name} from ${infoWilder.wilder.campus}`,
    e : "oO",
    T : "U "
}));


