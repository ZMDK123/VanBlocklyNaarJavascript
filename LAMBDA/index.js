"use strict";
const prompt = require("prompt-sync")();

// 19 LAMBDA
// Een lambda is een compacte manier om een functie te schrijven:

const kwadraat = getal => getal * getal;            // (1)
console.log(kwadraat(4));                           // (2)
const som = (getal1, getal2) => getal1 + getal2;    // (3)
console.log(som(4, 2));
const verschil = (getal1, getal2) =>
 { const hetVerschil = getal1 - getal2; return hetVerschil; }; 
console.log(verschil(5, 2));
// (1) Het deel na = is de eigenlijke lambda. We kijken eerst naar die lambda.
// Die heeft één parameter: getal. Je typt de parameter voor =>.
// Je typt na => wat de lambda teruggeeft. Het keyword return is overbodig.
// Je onthoudt de lambda in een variabele kwadraat met kwadraat =.
// Je doet dit om de lambda te kunnen oproepen. Je doet de oproep bij .
// (2) De variabele kwadraat bevat een lambda. Je roept de lambda op. 
// Je geeft 4 mee als parameter. Je toont de waarde die de lambda teruggeeft (16).
// (3) De lambda heeft meerdere parameters. Je typt dan de parameters tussen ( ) voor =>.
// (4) Als de lambda meerdere opdrachten bevat, typ je die opdrachten tussen { }.
// Je geeft de waarde van zo'n lambda terug met het keyword return.
// Je kan dit testen.
// Een synoniem voor een lambda is een arrow function (omdat een lambda => bevat).

// 19.1 forEach
// Je leerde al dat je met for .. of kan itereren over de elementen van een array.
// Je leert hier een andere manier: de forEach method:

const getallen = [3, 7];
getallen.forEach(getal => console.log(getal)); // (1)
// (1) Een array heeft een method forEach. Je geeft aan forEach een lambda mee.
// forEach roept die lambda op per element uit de array.
// forEach geeft bij elke oproep het door als parameter.
// Je kan dit testen.

// 19.2 filter
// Een array heeft een method filter. filter geeft een nieuwe array terug. 
// De nieuwe array bevat elementen uit de array waarop je filter opriep.
// Elementen komen enkel in de nieuwe array als ze voldoen aan een voorwaarde.
// Jij definieert die voorwaarde als een lambda die je meegeeft aan filter.
// Voorbeeld: je maakt een array met de positieve getallen uit een oorspronkelijke array:

const getallen = [-1, 2, 3, 4, 0];
const positieveGetallen = getallen.filter(getal => getal > 0); // (1)
positieveGetallen.forEach(getal => console.log(getal));
// (1) Je geeft aan filter een lambda mee. filter roept die lambda op per element uit de array.
// Als de lambda true teruggeeft, neemt filter het element op in een nieuwe array.
// Nadat filter alle elementen uit de oorspronkelijke array heeft doorlopen, 
// geeft filter de nieuwe array terug.
// Je kan dit testen.

// Als je alleen de positieve getallen wil tonen, kan de code korter:

[-1, 2, 3, 4, 0].filter(getal => getal > 0)
 .forEach(getal => console.log(getal));
// Je kan dit testen.

// filter werkt natuurlijk ook op een array met object literals.
// De volgende code toont enkel de personen die 2 kinderen hebben:

[ { naam: "Mie", kinderen: 3 },
 { naam: "Jos", kinderen: 2 },
 { naam: "Ann", kinderen: 2 },
 { naam: "Rik", kinderen: 2 }
].filter(persoon => persoon.kinderen === 2)
.forEach(persoon => console.log(persoon.naam, ":", persoon.kinderen));
// Je kan dit testen.

// Een grappige voorstelling van filter: op basis van een array met maaltijden
// een array met enkel de vegetarische maaltijden overhouden:


// 19.3 map
// Een array heeft een method map. map geeft een nieuwe array terug. 
// De nieuwe array bevat evenveel elementen als de array waarop je map opriep. Elk element in de 
// nieuwe array is het resultaat van een bewerking op het bijbehorende element uit de 
// oorspronkelijke array. Jij definieert die bewerking als een lambda die je meegeeft aan map.
// Voorbeeld: je maakt een array met getallen die de kwadraten zijn 
// van getallen uit een oorspronkelijke array:

[2, 4, 5].map(getal => getal * getal) // (1)
 .forEach(kwadraat => console.log(kwadraat)); // (2)
// (1) Je geeft aan map een lambda mee. map roept die lambda op per array element.
// map voegt de return waarde van de lambda toe aan een nieuwe array.
// Nadat map alle elementen uit de oorspronkelijke array heeft doorlopen, 
// geeft map de nieuwe array terug. Die bevat de waarden 4, 16 en 25.
// (2) Je itereert over de nieuwe array en je toont elk element.
// Je kan dit testen.
// Voorbeeld: Je hebt een array met vierkanten. 
// Je maakt op basis van die array een nieuwe array met de oppervlakten van die vierkanten:

[ { zijde: 3, kleur: "rood" },
 { zijde: 5, kleur: "geel" }
] .map(vierkant => vierkant.zijde * vierkant.zijde) // (1)
 .forEach(oppervlakte => console.log(oppervlakte));
// (1) map geeft een array terug met de waarden 9 en 25
// (de oppervlakten van de vierkanten uit de oorspronkelijke array).
// Je kan dit testen.


// 19.4 reduce
// Een array heeft een method reduce. reduce geeft één waarde terug. 
// Die waarde is een “samenvatting” (som, minimum, ...) van de elementen in de array.
// Jij definieert die samenvatting als een lambda die je meegeeft aan reduce.
// Voorbeeld: je maakt de som van de getallen in een array:

console.log([2, 5, 8, 11].reduce((som, getal) => som + getal)); // (1)
// (1) reduce voert intern volgende stappen uit:
// a. Je lambda oproepen: (2, 5) => 7.
// De parameters zijn het 1° array element (2) en het 2° element (5).
// Jij geeft de som van de twee getallen (7) terug.
// b. Je lambda oproepen: (7, 8) => 15
// De parameters zijn de return waarde van de vorige oproep (7) en het 3° element (8). 
// Jij geeft de som (15) terug.// 
// c. Je lambda oproepen: (15, 11) => 26
// De parameters zijn de return waarde van de vorige oproep (15) en het 4° element (11). 
// Jij geeft de som (26) terug.
// d. Dit (26) teruggeven.
// Je kan dit testen.

// Voorbeeld: je bepaalt het kleinste getal in een array met getallen:

console.log([5, 8, 2, 11].reduce(
 (kleinste, getal) => kleinste < getal ? kleinste : getal)); // (1)
// (1) reduce voert intern volgende stappen uit:
// a. Je lambda oproepen: (5, 8) => 5
// De parameters zijn het 1° element (5) en 2° element (8).
// Jij geeft de kleinste (5) terug.
// b. Je lambda oproepen: (5, 2) => 2
// De parameters zijn de return waarde van de vorige oproep (5) en het 3° element (2). 
// Jij geeft de kleinste (2) terug.
// c. Je lambda oproepen: (2, 11) => 2
// De parameters zijn de return waarde van de vorige oproep (2) en het 4° element (11). 
// Jij geeft de kleinste (2) terug.
// d. Dit (2) teruggeven.
// Je kan dit testen.
// Een grappige voorstelling van reduce: een array met voedsel reduceren tot één ding: poep


// 19.5 Combineren
// Je kan regelmatig forEach, filter, map en/of reduce combineren bij het programmeren.

// Voorbeeld 1
// Van een reeks getallen enkel de kwadraten tonen van de even getallen.
// Je combineert filter, map en forEach:
[5, 8, 2, 11] // (1)
 .filter(getal => getal % 2 === 0) // (2)
 .map(getal => getal * getal) // (3)
 .forEach(getal => console.log(getal)); // (4)
// (1) Dit is een array met getallen.
// (2) Je maakt een nieuwe array op basis van de array bij (1).
// De nieuwe array bevat (met filter) enkel de even getallen uit de array bij (1).
// (3) Je maakt een nieuwe array op basis van de array bij (2).
// De nieuwe array bevat (met map) de kwadraten van de getallen uit de array bij (2).
// (4) Je itereert met forEach over de getallen in de array bij (3). Je toont elk getal.
// Je kan dit testen.

// Voorbeeld 2
// De som van de oppervlakten van vierkanten.
// Je combineert map en reduce:
console.log(
 [ { zijde: 3, kleur: "rood" }, // (1)
 { zijde: 5, kleur: "geel" } ]
 .map(vierkant => vierkant.zijde * vierkant.zijde) // (2)
 .reduce((som, oppervlakte) => som + oppervlakte)); // (3)
// (1) Dit is een array met twee objecten. Die stellen vierkanten voor.
// (2) Je maakt een nieuwe array op basis van de array bij .
// De nieuwe array bevat de oppervlakten van de vierkanten uit de array bij : [ 9, 25 ].
// (3) Je reduceert de array van oppervlakten tot de som van deze oppervlakten: 34.
// Je kan dit testen.

// 19.6 Vergelijking
// Je kan filter, map en reduce vergelijken met handelingen op 7 aardappelen.
// 5 aardappelen zijn gezond, 2 niet: 
// • filter
// Je kiest enkel de gezonde aardappelen.
// Je houdt zo 5 van de 7 oorspronkelijke aardappelen over:
// • map
// Je schilt elke gezonde aardappel.
//  maakt van de 5 niet-geschilde aardappelen 5 geschilde aardappelen:
// • reduce
// Je maakt van de 5 geschilde aardappelen één ding: aardappelpuree: