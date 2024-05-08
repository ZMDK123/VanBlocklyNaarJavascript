"use strict";
const prompt = require("prompt-sync")();

/*
1.16 Sparen
Maak een array met mensen. Elke mens heeft een naam en spaargeld.
Toon de namen en het spaargeld van de mensen met meer dan € 1000 spaargeld.
*/

[
{ naam: "Mie", spaargeld: 1500 },
{ naam: "Jan", spaargeld: 700 },
 { naam: "Jos", spaargeld: 2000 }
]
 .filter(mens => mens.spaargeld > 1000)
.forEach(mens => console.log(mens.naam, mens.spaargeld));
