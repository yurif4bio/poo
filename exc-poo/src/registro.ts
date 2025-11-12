import * as read from 'readline-sync';
import { Situacao } from "./situacao";



export class Registro {
    private aluno: string;
    private matricula: number;
    private bimestre1Nota1: number;
    private bimestre1Nota2: number;
    private bimestre2Nota1: number;
    private bimestre2Nota2: number;
    private notaAvaliacaoFinal: number;

    constructor() {
       this.aluno= '';
    this.matricula= 0;
    this.bimestre1Nota1= 0;
    this.bimestre1Nota2= 0;
    this.bimestre2Nota1= 0;
    this.bimestre2Nota2= 0;
    this.notaAvaliacaoFinal= 0;

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
            return ((this.mediab1 * 2) + this.mediab2 * 3) / 5;
        }

        return undefined;
    }


    get situacao(): Situacao {
        if (this.mediaParcial != undefined) {
            if (this.mediaParcial >= 60) {
                return Situacao.aprovado;
            }

            if (this.mediaParcial < 10) {
                return Situacao.reprovado;
            }

            if (this.mediaParcial >= 10) {
                return Situacao.provaFinal;
            }
        }

        return Situacao.cursando;

    }

    registrarSituacao(sit:String): String {
        
    }


}
