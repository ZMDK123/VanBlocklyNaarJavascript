"use strict";
const prompt = require("prompt-sync")();
const leeftijd = Number(prompt("Leeftijd:"));
if (leeftijd < 7 || leeftijd > 80) {
 console.log("Prijs: 5");
} else {
 console.log("Prijs: 10");
}