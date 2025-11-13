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
    if (this.mediab1 != undefined && this.mediab2 != undefined) {
        const mp = ((this.mediab1 * 2) + this.mediab2 * 3) / 5;

        // Situações iniciais baseadas na média parcial
        if (mp < 10) {
            this._situacao = Situacao.reprovado;
            this._mediafinal = mp;
        } else if (mp >= 60) {
            this._situacao = Situacao.aprovado;
            this._mediafinal = mp;
        } else {
            this._situacao = Situacao.provaFinal; // 10 <= mp < 60
            this._mediafinal = undefined; // aguarda prova final
        }

        return mp;
    }

    return undefined;
}

get provaFinal() {
    // Só calcula se estiver em prova final
    if (this._situacao === Situacao.provaFinal) {
        const mp = this.mediaParcial;
        const naf = this.notaAvaliacaoFinal;

        if (mp !== undefined && naf >= 0 && naf <= 100) {
            const mf = (naf + mp) / 2;
            this._mediafinal = mf;

            if (mf >= 60) {
                this._situacao = Situacao.aprovado;
            } else {
                this._situacao = Situacao.reprovado;
            }

            return mf;
        }
    }

    return this._mediafinal;
}


    }

