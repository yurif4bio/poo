import { Registro } from "./registro";
export declare class Diario {
    disciplina: string;
    professor: string;
    turno: string;
    curso: string;
    codDaTurma: number;
    quantidadeDeAulas: number;
    registroDeNotas: Registro[];
    constructor(disciplina: string, professor: string, turno: string, curso: string, codTurma: number, qtdAulas: number);
    adicionarRegistro(reg: Registro): boolean;
}
//# sourceMappingURL=diario.d.ts.map