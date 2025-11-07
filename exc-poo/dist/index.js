"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var situacao;
(function (situacao) {
    situacao["cursando"] = "Cursando";
    situacao["trancado"] = "Trancado";
    situacao["cancelado"] = "Cancelado";
    situacao["aprovado"] = "Aprovado";
    situacao["provaFinal"] = "Prova Final";
    situacao["reprovado"] = "Reprovado";
})(situacao || (situacao = {}));
class Registro {
    aluno;
    matricula;
    bimestre1Nota1;
    bimestre1Nota2;
    bimestre2Nota1;
    bimestre2Nota2;
    notaAvaliacaoFinal;
    constructor(aluno, matricula, b1nota1, b1nota2, b2nota1, b2nota2, naf) {
        this.aluno = aluno;
        this.matricula = matricula;
        this.bimestre1Nota1 = b1nota1;
        this.bimestre1Nota2 = b1nota2;
        this.bimestre2Nota1 = b2nota1;
        this.bimestre2Nota2 = b2nota2;
        this.notaAvaliacaoFinal = naf;
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
                return situacao.aprovado;
            }
            if (this.mediaParcial < 10) {
                return situacao.reprovado;
            }
            if (this.mediaParcial >= 10) {
                return situacao.provaFinal;
            }
        }
        return situacao.cursando;
    }
    get mediaFinal() {
        if (this.mediaParcial >= 10) {
            return (this.notaAvaliacaoFinal + this.mediaParcial) / 2;
        }
        return undefined;
    }
}
class Diario {
    disciplina;
    professor;
    turno;
    curso;
    codDaTurma;
    quantidadeDeAulas;
    registroDeNotas;
    constructor(disciplina, professor, turno, curso, codTurma, qtdAulas, registro) {
        this.disciplina = disciplina;
        this.professor = professor;
        this.turno = turno;
        this.curso = curso;
        this.codDaTurma = codTurma;
        this.quantidadeDeAulas = qtdAulas;
        this.registroDeNotas = registro;
    }
}
//# sourceMappingURL=index.js.map