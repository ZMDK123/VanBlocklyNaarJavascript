"use strict";
const prompt = require("prompt-sync")();
const woord = prompt("Woord:");
let omgekeerd = "";
for (const letter of woord) {
 omgekeerd = letter + omgekeerd;
}
console.log(woord, "is", woord === omgekeerd ? "een" : "geen",
 "palindroom.");