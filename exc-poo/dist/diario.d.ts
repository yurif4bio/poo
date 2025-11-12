import registro = require("./registro");
export declare class Diario {
    disciplina: string;
    professor: string;
    turno: string;
    curso: string;
    codDaTurma: number;
    quantidadeDeAulas: number;
    registroDeNotas: registro.Registro[];
    constructor(disciplina: string, professor: string, turno: string, curso: string, codTurma: number, qtdAulas: number, registro: Registro[]);
}
//# sourceMappingURL=diario.d.ts.map