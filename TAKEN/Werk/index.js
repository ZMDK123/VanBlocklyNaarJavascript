"use strict";
const prompt = require("prompt-sync")();
const werk = prompt("Heb je werk (ja/nee):");
if (werk === "ja") {
 console.log("Veel werkplezier.");
 } else {
 const opleiding = prompt("Wil je een opleiding volgen (ja/nee):");
 if (opleiding === "ja") {
 console.log("Je vindt opleidingen op www.vdab.be/opleidingen.");
 } else {
 console.log("Je vindt vacatures op www.vdab.be/jobs.");
 }
}
