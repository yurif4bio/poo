"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Registro {
    discente;
    matricula;
    primeiroBimestreNota1;
    primeiroBimestreNota2;
    segundoBimestreNota1;
    segundoBimestreNota2;
    constructor(discente, matricula, bimestre1_nota1, bimestre2_nota1, bimestre1_nota2, bimestre2_nota2) {
        this.discente = discente;
        this.matricula = matricula;
        this.primeiroBimestreNota1 = bimestre1_nota1;
        this.primeiroBimestreNota2 = bimestre1_nota2;
        this.segundoBimestreNota1 = bimestre2_nota1;
        this.segundoBimestreNota2 = bimestre2_nota2;
    }
    mediaParcial(mp) {
        if (this.primeiroBimestreNota1 + this.primeiroBimestreNota2 >= 0
            && this.primeiroBimestreNota1 + this.primeiroBimestreNota2 <= 100) {
            this.primeiroBimestreNota1 + this.primeiroBimestreNota2;
            if (this.segundoBimestreNota1)
                ;
        }
    }
}
//# sourceMappingURL=index.js.map