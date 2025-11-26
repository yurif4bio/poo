import { Registro } from "./registro"


export class Diario {
    disciplina: string
    professor: string
    turno: string
    curso: string
    codDaTurma: number
    quantidadeDeAulas: number
    
    registroDeNotas: Registro[]


    constructor(disciplina: string, professor:string, turno: string, 
        curso: string,codTurma:number, qtdAulas: number) {

        this.disciplina = disciplina
        this.professor = professor
        this.turno = turno
        this. curso = curso
        this.codDaTurma = codTurma
        this.quantidadeDeAulas = qtdAulas
        this.registroDeNotas = []
    }


    adicionarRegistro(reg: Registro): boolean {
        if (reg) {
            this.registroDeNotas.push(reg)
            return true
        }
        return false
    }
    
}

