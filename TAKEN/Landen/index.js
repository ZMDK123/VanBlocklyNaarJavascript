"use strict";
const prompt = require("prompt-sync")();

/*1.17 Landen
De gebruiker typt per land de naam en de oppervlakte. Hij doet dit tot hij stop typt bij de naam.
Toon de gemiddelde oppervlakte van de landen.
Toon de landen met een oppervlakte onder dit gemiddelde.
Toon per land de naam en de oppervlakte.
Toon de landen met een oppervlakte boven dit gemiddelde.
Toon per land de naam en de oppervlakte. */

function typMensen() {
    const mensen = [];
    let naam = prompt("Naam:");
    while (naam !== "stop") {
    mensen.push({ naam: naam, lengte: Number(prompt("Lengte:")) });
    naam = prompt("Naam:");
    }
    return mensen;
   }
   function toonRapport(mensen) {
    const kleinsteLengte = mensen.map(mens => mens.lengte)
    .reduce((kleinste, lengte) => kleinste < lengte ? kleinste : lengte);
    console.log("Kleinste lengte:" , kleinsteLengte);
    mensen.filter(mens => mens.lengte === kleinsteLengte)
    .forEach(mens => console.log(mens.naam));
    const grootsteLengte = mensen.map(mens => mens.lengte)
    .reduce((grootste, lengte) => grootste > lengte ? grootste : lengte);
    console.log("Grootste lengte:" , grootsteLengte);
    mensen.filter(mens => mens.lengte === grootsteLengte)
    .forEach(mens => console.log(mens.naam));
   }
   const mensen = typMensen();
   if (mensen.length !== 0) {
    toonRapport(mensen);
   }