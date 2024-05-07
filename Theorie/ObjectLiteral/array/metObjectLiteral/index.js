"use strict";
const prompt = require("prompt-sync")();
const adres = {
  straat: "Keizerslaan",
  huisnummer: 11,
  gemeente: {
    postcode: 1000,
    naam: "Brussel",
  },
};
console.log(adres.gemeente.naam);
