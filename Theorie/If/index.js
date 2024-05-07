"use strict";
const temperatuur = Number(prompt("Temperatuur:"));
if (temperatuur <= 0) { 
 console.log("Het vriest.");
 console.log("Doe een dikke jas aan.");
}
else {
    console.log("Een lichte jas volstaat.");
   } 
   
console.log(temperatuur <= 0 ? "Dikke jas nodig." : "Lichte jas volstaat.");  // korte versie van de IF-ELSE-code hierboven (ternary operator)
