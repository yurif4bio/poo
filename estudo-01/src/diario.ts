

class Diario {
    private disciplina: string
    private docente: string
    private turno: string
    private curso: string
    private codigoDaTurma: number
    private quantidadeDeAulas: number
    // Registro  

    constructor (disc: string, dcnt: string, trn: string, crs: string, codTurma: number, qtdAulas: number) {
        this.disciplina = disc
        this.docente = dcnt
        this.turno = trn
        this.curso = crs
        this.codigoDaTurma = codTurma
        this.quantidadeDeAulas = qtdAulas

    }
}