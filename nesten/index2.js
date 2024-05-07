"use strict";
const prompt = require("prompt-sync")();
let volwassenen = 0;
let kinderen = 0;
let leeftijd = Number(prompt("Leeftijd (0 om te stoppen):"));
while (leeftijd !== 0) {
 if (leeftijd >= 18) {
 volwassenen++;
 } else {
 kinderen++;
 }
 leeftijd = Number(prompt("Leeftijd (0 om te stoppen):"));
}
console.log("Volwassenen:", volwassenen);
console.log("Kinderen:", kinderen);