"use strict";
const prompt = require("prompt-sync")();

//  17.1 Lengte
//  Een String is een object. De length property geeft je het aantal tekens in de String:
"use strict";
const naam = prompt("Naam:");
^



// 17.2 Letter
//Een String lijkt op een array. Elk element in de array is één teken van de String. 
//Het eerste teken heeft het volgnummer 0. Je leest één teken uit een String met de syntax []:
const naam = prompt("Naam:");
console.log("De eerste letter is", naam[0]);  //(1) Je leest de eerste letter (met het volgnummer 0). 

//Je toont met volgende code één per één de letters in een String:
const naam = prompt("Naam:");
for (const letter of naam) { //(1) Je typt een variabelenaam (letter). Je typt daarna of. Je typt daarna de String waarover je wil 
 console.log(letter);        //    itereren. In de for-lus verwijst letter bij elke iteratie naar het volgende teken. 
}                            //    De iteratie stopt als alle tekens doorlopen zijn.

// 17.3 Concateneren
// Concateneren betekent: Strings samenvoegen, “aan elkaar kleven”. Je doet dit met het + teken:
const voornaam = prompt("Voornaam:");
const familienaam = prompt("Familienaam:");
const naam = voornaam + " " + familienaam;      //(2) Je kleeft de voornaam, een spatie en de familienaam aan elkaar tot een nieuwe String.
console.log(naam);



// 17.4 Template literal
// Code om te concateneren is zelden leesbaar. Een alternatief is een template literal.
// Dit is een string waarin je kan verwijzen naar variabelen tussen ${ }.
const voornaam = prompt("Voornaam:");
const familienaam = prompt("Familienaam:");
const naam = `${voornaam} ${familienaam}`;  // (3) Je omsluit een template literal met ` en `, niet met " en ". Programmeurs noemen het teken `
console.log(naam);                          // ook BackTick. Je maakt dit teken op een Azerty toetsenbord met de combinatie van AltGr
                                            // en de toets waar ook het teken £ op staat.
                                            // (4) Je verwijst in de template literal naar de variabele voornaam met ${voornaam}.
                                            // JavaScript vervangt die verwijzing met de inhoud van de variabele voornaam.
                                            // Als voornaam Mie bevat en familienaam Bos, bevat naam dus Mie Bos.
// Je kan tussen ${ } ook een berekening schrijven:
const getal1 = 7;
const getal2 = 3;
console.log(`De som van ${getal1} en ${getal2} is ${getal1 + getal2}.`);


// 17.5 Onderzoeken
// Strings hebben veel methods (bewerkingen die je op Strings uitvoert). 
// Je leert hier methods kennen waarmee je onderzoekt of een String aan een voorwaarde voldoet. 
// De methods geven true terug als de String aan de voorwaarde voldoet. 
// Anders geven de methods false terug.
const naam = "Jana";
console.log(naam.startsWith("Ta")); // (1) Dit geeft false: Java begint niet met (starts with) Ta.
console.log(naam.includes("ana")); // (2) Dit geeft true: Jana bevat (includes) ana.
console.log(naam.endsWith("na")); // (3) Dit geeft true: Jana eindigt met (ends with) na.

// Er zijn ook methods die teruggeven op de hoeveelste plaats een String voorkomt in een String:
const naam = "Jana";
console.log(naam.indexOf("a")); // (1) Dit geeft 1, want a komt voor het eerst op positie 1.
console.log(naam.lastIndexOf("a")); // (2) Dit geeft 3, want a komt voor het laatst op positie 3.



// 17.6 Methods die een nieuwe String teruggeven
// Sommige methods geven een nieuwe String terug. 
// De String waarop je de method uitvoert wijzigt niet.
const naam = "Jana";
console.log(naam.toUpperCase());    // (1) Dit geeft JANA: Jana in hoofdletters.
console.log(naam.toLowerCase());    // (2) Dit geeft jana: Jana in kleine letters.
console.log(naam.slice(1));         // (3) Dit heeft ana: alle letters vanaf de positie 1.
console.log(naam.slice(1, 3));      // (4) Dit heeft an: de letters vanaf de positie 1 tot voor de positie 3.
console.log(naam.slice(-2));        // (5) Dit heeft na: de laatste 2 letters.
console.log(naam.replace("n", "k")); // (6) Dit geeft Jaka: Jana met n vervangen door k.
console.log(naam);                  // (7) Alle methods gaven een nieuwe String terug. De oorspronkelijke String is dezelfde gebleven.
const metSpaties = " Jana ";
console.log(`>${metSpaties.trim()}<`);      // (8) Dit geeft >Jana<: de spaties vooraan én achteraan zijn verwijderd.
console.log(`>${metSpaties.trimStart()}<`); // (9) Dit geeft >Jana <: de spaties vooraan zijn verwijderd.
console.log(`>${metSpaties.trimEnd()}<`);   // (10)Dit geeft > Jana<: de spaties achteraan zijn verwijderd.


//17.7 Method split
// De method split geeft een array terug met de onderdelen van een String. 
// Jij geeft aan de method een scheidingsteken mee waarmee de String in onderdelen wordt gesplitst.
// "een-twee-drie".split("-") geeft een array met 3 elementen: "een", "twee","drie"
