"use strict";
const prompt = require("prompt-sync")();
const code = prompt("Landcode:");
switch (code) {
 case "B":
 console.log("België");
 break;
 case "NL":
 console.log("Nederland");
 break;
 case "FR":
 console.log("Frankrijk");
 break;
 default:
 console.log("Onbekend")
}
