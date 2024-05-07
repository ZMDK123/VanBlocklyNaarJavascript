"use strict";
const prompt = require("prompt-sync")();


// 18 TOFIXED

// Als je rekent met decimale getallen (met cijfers na de komma), kan je afrondingsfouten krijgen.

// Je probeert dit. Je krijgt 2.3800000000000003.
// Je lost dit op. Je wijzigt de laatste opdracht:
// console.log(teBetalen.toFixed(2));   // (1) 
// (1) Je voert de method toFixed uit. Die geeft een String.
//     Die bevat een afgeronde versie van het getal. 
//     Je bepaalt met de parameter van toFixed (hier 2) het aantal decimalen waarop je afrondt.
//     Als je met het resultaat van toFixed wil rekenen, moet je de String omzetten naar een getal.
const prijsAppel = 0.34;
const aantalAppels = 7;
let teBetalen = prijsAppel * aantalAppels;
teBetalen = Number(teBetalen.toFixed(2)); // (1) Je zet met de Number functie de String met de afgeronde waarde om naar een getal.

console.log(teBetalen);
const prijsPeer = 0.32;
const aantalPeren = 9;
teBetalen += prijsPeer * aantalPeren; //(2) Je kan met dit getal verder rekenen.
console.log(teBetalen.toFixed(2));
