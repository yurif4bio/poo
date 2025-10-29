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

class exemplar {
    isbn: Number
    titulo: String
    cdd: Number
    quantidade: Number

    constructor(isbn: Number, ttl: String, cdd: Number, qtd: Number) {
        this.isbn = isbn
        this.titulo = ttl
        this.cdd = cdd
        this.quantidade = qtd

    }
}

let livro01 = new exemplar (423524, 'eu, robô - asimov', 32423, 45);
let livro02 = new exemplar (3123412, 'sapiens', 4232, 32);
let livro03 = new exemplar (423524, 'neuromancer', 32423, 45);
let livro04 = new exemplar (423524, 'o programador pragmático', 32423, 45);
let livro05 = new exemplar (3123412, 'clean code', 4232, 32);

//QUESTAO-03

// Classe Biblioteca
class Biblioteca {
    // Atributo privado para armazenar os exemplares
    private exemplares: Exemplar[] = [];

    // Método para adicionar um exemplar
    public adicionarExemplar(novoExemplar: Exemplar): void {
        this.exemplares.push(novoExemplar);
    }

    // Método para obter todos os exemplares cadastrados
    public obterTodosExemplares(): Exemplar[] {
        return this.exemplares;
    }

    // Método para obter um exemplar pelo CDD
    public obterExemplarPorCDD(cdd: number): Exemplar | undefined {
        return this.exemplares.find(ex => ex.cdd === cdd);
    }
}

// Criando instância da biblioteca
let minhaBiblioteca = new Biblioteca();

// Adicionando os exemplares
minhaBiblioteca.adicionarExemplar(livro01);
minhaBiblioteca.adicionarExemplar(livro02);
minhaBiblioteca.adicionarExemplar(livro03);
minhaBiblioteca.adicionarExemplar(livro04);
minhaBiblioteca.adicionarExemplar(livro05);

// Exemplo de uso: listar todos os exemplares
console.log(minhaBiblioteca.obterTodosExemplares());

// Exemplo de uso: buscar um exemplar pelo CDD
console.log(minhaBiblioteca.obterExemplarPorCDD(4232));
