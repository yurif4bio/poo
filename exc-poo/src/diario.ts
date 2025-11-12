import registro = require("./registro")

export class Diario {
    disciplina: string
    professor: string
    turno: string
    curso: string
    codDaTurma: number
    quantidadeDeAulas: number
    registroDeNotas: registro.Registro[]


    constructor(disciplina: string, professor:string, turno: string, 
        curso: string,codTurma:number, qtdAulas: number, registro: Registro[]) {

        this.disciplina = disciplina
        this.professor = professor
        this.turno = turno
        this. curso = curso
        this.codDaTurma = codTurma
        this.quantidadeDeAulas = qtdAulas
        this.registroDeNotas = registro
    }


}
