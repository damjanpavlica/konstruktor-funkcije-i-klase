/*
function Klijent(ime, brojRacuna, stanje) {
    this.ime = ime;
    this.brojRacuna = brojRacuna;
    this.stanje = stanje;

    this.prenesiSredstva = function(primalac, suma) {
        if (this.stanje >= suma) {
            // sebi da smanji stanje za sumu
            this.stanje = this.stanje - suma;
            // primaocu da poveca stanje za sumu
            primalac.stanje = primalac.stanje + suma;
            console.log("Transakcija uspesno izvrsena");
        } else {
            console.log("Nemate dovoljno sredstava na racunu");
        }
    }
}
*/

let brojac = 809800000;

class Klijent {
    constructor(ime, stanje) {
        this.ime = ime;
        this.stanje = stanje;
        this.brojRacuna = brojac++;
    }

    prenesiSredstva(primalac, suma) {
        if (this.stanje >= suma) {
            // sebi da smanji stanje za sumu
            this.stanje = this.stanje - suma;
            // primaocu da poveca stanje za sumu
            primalac.stanje = primalac.stanje + suma;
            console.log("Transakcija uspesno izvrsena");
        } else {
            console.log("Nemate dovoljno sredstava na racunu");
        }
    }
}

const mika = new Klijent("Milan Lazic", 20000);
const laza = new Klijent("Laza Lazic", 1000);
const ana = new Klijent("Ana Stanic", 24000);
const milica = new Klijent("Milica M", 300);
