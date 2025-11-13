"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
const situacao_1 = require("./situacao");
class Registro {
    aluno;
    matricula;
    bimestre1Nota1;
    bimestre1Nota2;
    bimestre2Nota1;
    bimestre2Nota2;
    notaAvaliacaoFinal;
    _situacao;
    _mediafinal;
    constructor() {
        this.aluno = '';
        this.matricula = 0;
        this.bimestre1Nota1 = 0;
        this.bimestre1Nota2 = 0;
        this.bimestre2Nota1 = 0;
        this.bimestre2Nota2 = 0;
        this.notaAvaliacaoFinal = 0;
        this._situacao = situacao_1.Situacao.cursando;
        this._mediafinal = undefined;
    }
    //calcular media de cada bimedstre
    get mediab1() {
        if (this.bimestre1Nota1 >= 0 && this.bimestre1Nota1 <= 40) {
            if (this.bimestre1Nota2 >= 0 && this.bimestre1Nota2 <= 60) {
                return (this.bimestre1Nota1 + this.bimestre1Nota2) / 2;
            }
        }
        return undefined;
    }
    get mediab2() {
        if (this.bimestre2Nota1 >= 0 && this.bimestre2Nota1 <= 40) {
            if (this.bimestre2Nota2 >= 0 && this.bimestre2Nota2 <= 60) {
                return (this.bimestre2Nota1 + this.bimestre2Nota2) / 2;
            }
        }
        return undefined;
    }
    get mediaParcial() {
        let mp = undefined;
        if (this.mediab1 != undefined && this.mediab2 != undefined) {
            mp = ((this.mediab1 * 2) + this.mediab2 * 3) / 5;
            if (mp < 10) {
                this._situacao = situacao_1.Situacao.reprovado;
            }
            else if (mp < 60) {
                this._situacao = situacao_1.Situacao.provaFinal;
            }
            else if (mp >= 60) {
                this._situacao = situacao_1.Situacao.aprovado;
            }
        }
        return mp;
    }
}
exports.Registro = Registro;
//# sourceMappingURL=registro.js.map