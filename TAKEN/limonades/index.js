"use strict";
const aantal = Number(prompt("Aantal Limonades:"));

if (aantal > 10) { 
    console.log("Totaal: ", aantal * 3 * 0.95, "€");
    console.log("Totaal: " , aantal * 3 , "€" );
   }
   else {
       console.log("Een lichte jas volstaat.");
      } 

// ??? console.log(aantal > 10 ? "Totaal: ", aantal * 3 * 0.95 , "€"  : "Totaal: " , aantal * 3 , "€"); 