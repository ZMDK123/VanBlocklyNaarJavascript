"use strict";
const prompt = require("prompt-sync")();
const mensen = [];
let naam = prompt("Naam:");
while (naam !== "stop") {
 mensen.push({
 naam: naam,
 gewicht: Number(prompt("Gewicht:")),
 lengte: Number(prompt("Lengte:"))
 })
 naam = prompt("Naam:");
}
for (const mens of mensen) {
 console.log(mens.naam, mens.gewicht / (mens.lengte * mens.lengte));
}