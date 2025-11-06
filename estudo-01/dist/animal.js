"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = exports.TipoAnimal = void 0;
var TipoAnimal;
(function (TipoAnimal) {
    TipoAnimal["CANINO"] = "Canino";
    TipoAnimal["FELINO"] = "Felino";
    TipoAnimal["AVE"] = "Ave";
})(TipoAnimal || (exports.TipoAnimal = TipoAnimal = {}));
class Animal {
    nome;
    tutor;
    idade;
    tipo;
    constructor(nm, tt, id) {
        this.nome = nm;
        this.tutor = tt;
        this.idade = id;
        this.tipo = TipoAnimal.CANINO;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map