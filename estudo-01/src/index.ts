// class Animal {
//     nome: String
//     tutor: String
//     idade: Number
//     tipo: String

//     constructor(nm: String, tt: String, idd: Number, tp: String) {
//         this.nome = nm
//         this.tutor = tt
//         this.idade = idd
//         this.tipo = tp
//     }
// }

// let krypto = new Animal('Krypto','Clark Kent',33,'canino');

// class Consulta {
//     private data: String
//     private animal: String
//     private preco: Number
//     private receita: String

//     constructor (dt: String, anml: String, prc: Number, rect: String) {
//         this.data = dt
//         this.animal = anml 
//         this.preco = prc
//         this.receita = rect

//     }
// }

// set(animal: String) {
    
//     if (this.animal= 'canino')

// }


// let rex = new Animal('Krypto','Clark Kent',33,'canino');
// let java = new Animal('Krypto','Clark Kent',33,'canino');

// console.log (rex, java)


// correção

enum TipoAnimal { CANINO = 'Canino', FELINO = 'Felino', AVE = 'Ave' }

class Animal {
    nome: string
    tutor: string
    idade: number
    tipo: TipoAnimal

    constructor(nm: string, tt: string, id: number) {
        this.nome = nm
        this.tutor = tt
        this.idade = id
        this.tipo = TipoAnimal.CANINO
    }
}
class Consulta {
    private data: Date
    private animal: Animal
    private preco: number
    private receita: string

    constructor(an: Animal) {
        this.data = new Date()
        this.animal = an
        this.preco = 150
        this.receita = ''
    }
    setPreco(p: number) {
        if (p >= 0) { this.preco = p }
    }
    getPreco(): number { return this.preco }
    setReceita(r: string) {
        if (r && r.length > 0) { this.receita = r }
    }
    getReceita(): string { return this.receita }
}
let meg = new Animal('Meg', 'João', 4)
let bubu = new Animal('Bubu', 'Bruno', 9)
bubu.tipo = TipoAnimal.FELINO
let consulta1 = new Consulta(meg)
let consulta2 = new Consulta(bubu)
consulta2.setPreco(90)
consulta2.setReceita('Atibiótico Tal de 12 em 12 horas')
console.log(consulta1)
console.log(consulta2)