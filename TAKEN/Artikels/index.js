"use strict";
const prompt = require("prompt-sync")();

/*
1.19 Artikels
// 1 /// De gebruiker typt per artikel de naam, de aankoopprijs en de verkoopprijs.
//   /// Hij herhaalt dit tot hij stop typt bij de naam.
// 2 /// Hij typt daarna een woord.
//   /// Toon de namen van de artikels die in hun naam dit woord bevatten.
// 3 /// De gebruiker typt twee getallen.
//   /// Als het tweede getal kleiner is dan het eerste getal toont je een foutmelding. 
//   /// Anders toon je de namen en verkoopprijzen van de artikels waarvan de verkoopprijs ligt tussen 
//   /// deze twee getallen. Als een verkoopprijs gelijk is aan het eerste of het tweede getal neem je het 
//   /// ook op in de lijst.
// 4 /// Toon de gemiddelde verkoopprijs van de artikels.
// 5 /// Bezorg je oplossing aan je coach.
*/

/*
Maak voor deze oefening 2 oplossingen. Een eerste waar je géén gebruik maakt van lambda-functies (ook niet van .forEach(), .filter() etc.), 
en een tweede waar je hier wél gebruik van maakt (overal waar mogelijk). 
Push je oplossingen telkens naar je gitrepository en nodig mij (tom.vanlerberghe@vdab.be) toe als collaborator indien dit nog niet gebeurd zou zijn. 
Stuur me een mailtje telkens je een versie af hebt.
*/

// 1 ///
const artikels = [];
let artikel = prompt("Artikel:");
while (artikel !== "stop") {
  artikels.push({
    artikelnaam: artikel,
    aankoopprijs: Number(prompt("Aankoopprijs:")),
    verkoopprijs: Number(prompt("Verkoopprijs:")),
  });
  artikel = prompt("Artikel:");
}

console.log();

// 2 ///
const zoekArtikel = prompt("Zoek artikel:");
artikels
  .filter((artikel) => artikel.artikelnaam.includes(zoekArtikel))
  .forEach((artikel) => console.log(artikel.artikelnaam));

console.log();

// 3 ///
const minVerkoop = prompt("Minimum verkoopprijs:");
let maxVerkoop = prompt("Maximum verkoopprijs:");
while (maxVerkoop < minVerkoop) {
  maxVerkoop = Number(
    prompt(
      "De maximumprijs mag niet lager zijn de de minimumprijs. Probeer opnieuw:"
    )
  );
}


artikels
  .filter(
    (artikel) =>
      artikel.verkoopprijs <= maxVerkoop && artikel.verkoopprijs >= minVerkoop
  )
  .forEach((artikel) =>
    console.log(
      `Artikelnaam: ${artikel.artikelnaam}    Verkoopprijs: ${artikel.verkoopprijs}€`
    )
  );

console.log();

// 4 ///
console.log(
  `Gemiddelde prijs: ${artikels
    .map((prijs) => prijs.verkoopprijs)
    .reduce((som, prijs) => som + prijs) / artikels.length}€`
);
