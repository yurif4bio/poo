"use strict";
// class Animal {
//     nome: String
//     tutor: String
//     idade: Number
//     tipo: String
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
const consulta_1 = require("./consulta");
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
let meg = new animal_1.Animal('Meg', 'João', 4);
let bubu = new animal_1.Animal('Bubu', 'Bruno', 9);
bubu.tipo = animal_1.TipoAnimal.FELINO;
let consulta1 = new consulta_1.Consulta(meg);
let consulta2 = new consulta_1.Consulta(bubu);
consulta2.setPreco(90);
consulta2.setReceita('Atibiótico Tal de 12 em 12 horas');
console.log(consulta1);
console.log(consulta2);
//# sourceMappingURL=principal.js.map