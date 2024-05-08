"use strict";
const prompt = require("prompt-sync")();

/*1.18 Mensen
De gebruiker typt per mens de naam en de lengte.
Hij herhaalt dit tot hij stop typt bij de naam.
Toon de kleinste lengte van de mensen.
Toon de mensen met een lengte gelijk aan de kleinste lengte. Toon per mens de naam.
Toon de grootste lengte van de mensen.
Toon daarna de mensen met een lengte gelijk aan de grootste lengte. Toon per mens de naam*/

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