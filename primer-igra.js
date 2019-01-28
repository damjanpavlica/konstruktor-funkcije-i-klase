class Junak {
    constructor(ime) {
        this.ime = ime
        this.energija = 100
        this.bojaKoze = "kozna"
        this.iskustvo = 0
    }

    napadni(neprijatelj) {
        if (this.energija <= 0 || neprijatelj.energija <= 0) return

        const damage = Math.round(Math.random() * 20)
        neprijatelj.energija -= damage
        this.iskustvo += damage * 30
        console.log(`${neprijatelj.ime} je izgubio ${damage} energije.`)

        if (neprijatelj.energija <= 0)
            console.log(`${neprijatelj.ime} je mrtav.`)
    }
}

class Ork extends Junak {
    constructor(ime) {
        super(ime)
        this.bojaKoze = "zelena"
        this.energija = 80
    }
}

class Trol extends Junak {
    constructor(ime) {
        super(ime)
        this.bojaKoze = "siva"
        this.energija = 120
    }
}

const covek = new Junak("Aragorn")
const ork = new Ork("Grisnak")
const vilenjak = new Junak("Legolas")
const trol = new Trol("Grol")

// automatska borba
for (let i = 0; i < 10; i++) {
    covek.napadni(ork)
    ork.napadni(covek)
}
