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
    constructor() {
        this.aluno = '';
        this.matricula = 0;
        this.bimestre1Nota1 = 0;
        this.bimestre1Nota2 = 0;
        this.bimestre2Nota1 = 0;
        this.bimestre2Nota2 = 0;
        this.notaAvaliacaoFinal = 0;
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
        if (this.mediab1 != undefined && this.mediab2 != undefined) {
            return ((this.mediab1 * 2) + this.mediab2 * 3) / 5;
        }
        return undefined;
    }
    get situacao() {
        if (this.mediaParcial != undefined) {
            if (this.mediaParcial >= 60) {
                return situacao_1.Situacao.aprovado;
            }
            if (this.mediaParcial < 10) {
                return situacao_1.Situacao.reprovado;
            }
            if (this.mediaParcial >= 10) {
                return situacao_1.Situacao.provaFinal;
            }
        }
        return situacao_1.Situacao.cursando;
    }
    registrarSituacao(sit) {
    }
}
exports.Registro = Registro;
//# sourceMappingURL=registro.js.map