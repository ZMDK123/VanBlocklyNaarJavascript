"use strict";
const prompt = require("prompt-sync")();
const namen = []; 
namen.push(prompt("Naam:")); 
namen.push(prompt("Naam:"));
console.log(namen.length); 
for (const naam of namen) {
 console.log(naam);
}
