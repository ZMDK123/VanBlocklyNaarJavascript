"use strict";
const prompt = require("prompt-sync")();
let vierkant = { 
    zijde : 3, 
    kleur : "rood"
}; 
console.log(vierkant.zijde); 
console.log(vierkant.kleur);
vierkant.zijde = 4; 
console.log(vierkant.zijde); 
console.log(vierkant.kleur);

//of

vierkant = {
    zijde : Number(prompt("Zijde:")),
    kleur : prompt("Kleur:")
   };
   
console.log(vierkant.zijde); 
console.log(vierkant.kleur);


//of 

vierkant = {
    zijde : Number(prompt("Zijde:")),
    kleur : prompt("Kleur:")
   };
   console.log(vierkant.zijde, vierkant.kleur);