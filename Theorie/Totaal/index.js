"use strict";
const prompt = require("prompt-sync")();
let aantal = Number(prompt("Aantal limonades:"));
while (aantal <= 0) {
 aantal = Number(prompt("Aantal limonades:"));
}
console.log(aantal * 3);