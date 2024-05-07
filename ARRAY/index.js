"use strict";
const prompt = require("prompt-sync")();
const namen = [ "Mie", "Jan", "Jos" ]; 
console.log(namen[0]); 
namen[0] = "Pol"; 
for (const naam of namen) { 
 console.log(naam);
}
