"use strict";
const prompt = require("prompt-sync")();
function typGetal() { 
    let antwoord = Number(prompt("Getal:")) ;
    while (antwoord <= 0) {
    antwoord = Number(prompt("Getal moet positief zijn. Probeer opnieuw:"));
    }
    return antwoord; 
   } 
   const getal = typGetal(); 
   console.log(getal);
   