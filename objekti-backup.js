
const mika = {
    ime: "Milan Lazic",
    brojRacuna: 8098044444,
    stanje: 20000,

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

const laza = {
    ime: "Laza Lazic",
    brojRacuna: 8098044442,
    stanje: 1000,

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

const ana = {
    ime: "Ana Stanic",
    brojRacuna: 8098044446,
    stanje: 24000,

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
