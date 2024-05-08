"use strict";
const prompt = require("prompt-sync")();

/*1.17 Landen
De gebruiker typt per land de naam en de oppervlakte. Hij doet dit tot hij stop typt bij de naam.
Toon de gemiddelde oppervlakte van de landen.
Toon de landen met een oppervlakte onder dit gemiddelde.
Toon per land de naam en de oppervlakte.
Toon de landen met een oppervlakte boven dit gemiddelde.
Toon per land de naam en de oppervlakte. */

function typLanden() {
  const landen = [];
  let naam = prompt("Naam:");
  while (naam !== "stop") {
    landen.push({ naam: naam, oppervlakte: Number(prompt("Oppervlakte")) });
    naam = prompt("Naam:");
  }
  return landen;
}
function toonRapport(landen) {
  const gemiddelde =
    landen
      .map((land) => land.oppervlakte)
      .reduce((totaal, oppervlakte) => totaal + oppervlakte) / landen.length;
  console.log("Gemiddelde:", gemiddelde);
  console.log("Onder gemiddelde:");
  landen
    .filter((land) => land.oppervlakte < gemiddelde)
    .forEach((land) => console.log(land.naam, land.oppervlakte));
  console.log("Boven gemiddelde:");
  landen
    .filter((land) => land.oppervlakte > gemiddelde)
    .forEach((land) => console.log(land.naam, land.oppervlakte));
}
const landen = typLanden();
if (landen.length !== 0) {
  toonRapport(landen);
}
