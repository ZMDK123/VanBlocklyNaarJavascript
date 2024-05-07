"use strict";
const prompt = require("prompt-sync")();
const gewicht = Number(prompt("Gewicht:"));
const lengte = Number(prompt("Lengte:"));
const bmi = gewicht / (lengte * lengte);
if (bmi >= 18.5 && bmi <= 25) {
 console.log("OK");
} else {
 console.log("Niet OK");
}