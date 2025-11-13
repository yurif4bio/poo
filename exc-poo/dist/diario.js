"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diario = void 0;
class Diario {
    disciplina;
    professor;
    turno;
    curso;
    codDaTurma;
    quantidadeDeAulas;
    registroDeNotas;
    constructor(disciplina, professor, turno, curso, codTurma, qtdAulas) {
        this.disciplina = disciplina;
        this.professor = professor;
        this.turno = turno;
        this.curso = curso;
        this.codDaTurma = codTurma;
        this.quantidadeDeAulas = qtdAulas;
        this.registroDeNotas = [];
    }
    adicionarRegistro(reg) {
        if (reg) {
            this.registroDeNotas.push(reg);
            return true;
        }
        return false;
    }
}
exports.Diario = Diario;
//# sourceMappingURL=diario.js.map