"use strict";
const prompt = require("prompt-sync")();
const woord = prompt("Woord:");
const zoekLetter = prompt("Letter:");
let aantal = 0;
for (const letter of woord) {
 if (letter === zoekLetter) {
 aantal++;
 }
}
console.log("De letter komt",aantal,"maal voor");
console.log(zoekLetter, "komt", aantal, "keer voor in", woord);