"use strict";
const prompt = require("prompt-sync")();
const vierkanten = [];
let zijde = Number(prompt("Zijde:"));
while (zijde !== 0) {
 vierkanten.push({
 zijde: zijde,
 kleur: prompt("Kleur:")
 });
 zijde = Number(prompt("Zijde:"));
}
for (const vierkant of vierkanten) {
 console.log(vierkant.zijde, vierkant.kleur);
}
