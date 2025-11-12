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
exports.Diario = Diario;
//# sourceMappingURL=diario.js.map