"use strict";
const prompt = require("prompt-sync*")();
const naam = "Mie"; // const = variabele die NIET kan gewijzigd worden
let kinderen = 3; // let = variabele die kan gewijzigd worden
kinderen = 4;
console.log(kinderen);
const gehuwd = true;
console.log(naam, kinderen, gehuwd);
console.log("Totaal kindergeld:", kinderen * 300);
const naam2 = prompt("Naam:");   //input van tekst
console.log(naam2) ;
const aantalKinderen = Number(prompt("Kinderen:")); // input van cijfer
console.log(aantalKinderen);
kinderen = kinderen + 2;  // kan ook korter, zie hieronder
kinderen += 2;
kinderen = kinderen - 2;  // kan ook korter, zie hieronder
kinderen -= 2;
kinderen = kinderen + 1;  // kan ook korter, zie hieronder
kinderen++;
kinderen = kinderen - 1;  // kan ook korter, zie hieronder
kinderen--;

