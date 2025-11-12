import { Situacao } from "./situacao";
export declare class Registro {
    private aluno;
    private matricula;
    private bimestre1Nota1;
    private bimestre1Nota2;
    private bimestre2Nota1;
    private bimestre2Nota2;
    private notaAvaliacaoFinal;
    constructor();
    get mediab1(): number | undefined;
    get mediab2(): number | undefined;
    get mediaParcial(): number | undefined;
    get situacao(): Situacao;
    registrarSituacao(sit: String): String;
}
//# sourceMappingURL=registro.d.ts.map