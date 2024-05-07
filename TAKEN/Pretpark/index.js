"use strict";
const prompt = require("prompt-sync")();
let korting = 0;
let leeftijd = Number(prompt("Leeftijd (0 om te stoppen):"));
while (leeftijd !== 0) {
 if (leeftijd < 7 || leeftijd > 80) {
 korting++;
 }
 leeftijd = Number(prompt("Leeftijd (0 om te stoppen):"));
}
console.log("Aantal bezoekers met korting:", korting);
