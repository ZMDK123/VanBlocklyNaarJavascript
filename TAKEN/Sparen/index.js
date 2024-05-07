"use strict";
const prompt = require("prompt-sync")();

[
{ naam: "Mie", spaargeld: 1500 },
{ naam: "Jan", spaargeld: 700 },
 { naam: "Jos", spaargeld: 2000 }
]
 .filter(mens => mens.spaargeld > 1000)
.forEach(mens => console.log(mens.naam, mens.spaargeld));
