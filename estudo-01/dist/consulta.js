"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
class Consulta {
    data;
    animal;
    preco;
    receita;
    constructor(an) {
        this.data = new Date();
        this.animal = an;
        this.preco = 150;
        this.receita = '';
    }
    setPreco(p) {
        if (p >= 0) {
            this.preco = p;
        }
    }
    getPreco() { return this.preco; }
    setReceita(r) {
        if (r && r.length > 0) {
            this.receita = r;
        }
    }
    getReceita() { return this.receita; }
}
exports.Consulta = Consulta;
//# sourceMappingURL=consulta.js.map