"use strict";
const prompt = require("prompt-sync")();
const vriesTemperaturen = [];
let temperatuur = Number(prompt("Temperatuur:"));
while (temperatuur !== 777) {
 if (temperatuur <= 0) {
 vriesTemperaturen.push(temperatuur);
 }
 temperatuur = Number(prompt("Temperatuur:"));
}
for (const temperatuur of vriesTemperaturen) {
 console.log(temperatuur);
}
