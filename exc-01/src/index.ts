class Registro {
   private aluno: string
   private matricula: number
   private mediaParcial: number | undefined
   private mediasDeCadaBimestre: string
   private bimestre1: number
   private bimestre2: number

   readonly bimestreMax = 60   

    constructor (aln: string, mtr: number, mcb: string, mp: undefined) {

        this.aluno = aln
        this.matricula = mtr
        this.mediasDeCadaBimestre = mcb
        this.mediaParcial = mp
        this.bimestre1 = 0
        this.bimestre2 = 0

    }

   calcularMediaParcial (b1:number, b2:number): number | undefined {
        if (b1 >= 0 && b1 <= 100 && b2 >= 0 && b2 <= 100) {
            this.bimestre1 = b1
            this.bimestre2 = b2

            this.mediaParcial = (b1 * 2 + b2 * 3) / 5

            //atualizar a situação de acordo com o valor da média parcial

        }
        return this.mediaParcial
   }

      
   
   
}


class Diario {

   private disciplina: string
   private docente: string
   private turno: string
   private codigoDaTurma: number
   private quantidadeDeAulas: number
   private registroDeNotas: Registro

    constructor (dcp: string, dct: string, trn: string, cod_trm: number, qtd_aulas: number, reg_notas: Registro) {
        this.disciplina = dcp
        this.docente = dct
        this.turno = trn
        this.codigoDaTurma = cod_trm
        this.quantidadeDeAulas = qtd_aulas
        this.registroDeNotas = reg_notas
    }


}


