//QUESTAO-01

class estudante {
    matricula: Number
    nome: String
    curso: String
    ira: Number
    periodo: Number

    constructor (mat:Number, nm: String, crs: String, ira: Number, prd: Number ) {
        this.matricula = mat
        this.nome = nm
        this.curso = crs
        this.ira = ira
        if (prd >= 1 && prd <= 9) {
            this.periodo = prd
        }
        else { this.periodo = 1 }

    }




}

let aluno01 = new estudante(123, 'bruce', 'TSI', 78, 42);
let aluno02 = new estudante(321, 'spok', 'engenharia', 89.5, 4);

//QUESTAO-02

class exemplar 