export class Registro {
    private nomeDoEstudante: string
    private matriculaDoEstudante: number
    private mediasDeCadaBimestre: undefined
    private mediaParcial: undefined
    

    constructor(nm: string, mtr:number, mediaBimestral: undefined) {
        this.nomeDoEstudante = nm
        this.matriculaDoEstudante = mtr
        this.mediasDeCadaBimestre = mediaBimestral
        this.mediaParcial = undefined

        
    }

}