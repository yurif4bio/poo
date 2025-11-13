import { Situacao } from "./situacao";



export class Registro {
    private aluno: string;
    private matricula: number;
    private bimestre1Nota1: number;
    private bimestre1Nota2: number;
    private bimestre2Nota1: number;
    private bimestre2Nota2: number;
    private notaAvaliacaoFinal: number;
    private _situacao: Situacao
    private _mediafinal: number | undefined;

    constructor() {
        this.aluno = '';
        this.matricula = 0;
        this.bimestre1Nota1 = 0;
        this.bimestre1Nota2 = 0;
        this.bimestre2Nota1 = 0;
        this.bimestre2Nota2 = 0;
        this.notaAvaliacaoFinal = 0;
        this._situacao = Situacao.cursando
        this._mediafinal = undefined
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
        let mp = undefined
        if (this.mediab1 != undefined && this.mediab2 != undefined) {
            mp = ((this.mediab1 * 2) + this.mediab2 * 3) / 5;

            if (mp < 10) {
                this._situacao = Situacao.reprovado
            } else if (mp < 60) {
                this._situacao = Situacao.provaFinal
            } else if (mp >= 60) {
                this._situacao = Situacao.aprovado
            }
        }

        return mp;
    }



    }


   







}
