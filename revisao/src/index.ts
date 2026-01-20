class Elevador {
    private andarAtual: number = 0;
    private totalAndares: number = 0;
    private capacidade: number = 0;
    private pessoasPresentes: number = 0;
    private portaAberta: boolean = false;

    public inicializar(capacidade: number, totalAndares: number): void {
        this.capacidade = capacidade;
        this.totalAndares = totalAndares;
        this.andarAtual = 0;
        this.pessoasPresentes = 0;
        this.portaAberta = false;
        console.log(`Elevador pronto! Prédio de ${totalAndares} andares. Capacidade: ${capacidade} pessoas.`);
    }

    public abrirPorta(): void {
        this.portaAberta = true;
        console.log("Porta aberta.");
    }

    public fecharPorta(): void {
        this.portaAberta = false;
        console.log("Porta fechada.");
    }

    public entrar(quantidade: number = 1): void {
        if (!this.portaAberta) {
            console.log("Erro: A porta precisa estar aberta para alguém entrar.");
            return;
        }

        if (this.pessoasPresentes + quantidade <= this.capacidade) {
            this.pessoasPresentes += quantidade;
            console.log(`${quantidade} pessoa(s) entrou(aram). Total agora: ${this.pessoasPresentes}`);
            this.fecharPorta(); // Regra: Após acrescentar, deve-se fechar a porta
        } else {
            console.log("Erro: Capacidade máxima atingida!");
        }
    }

    public sair(quantidade: number = 1): void {
        if (!this.portaAberta) {
            console.log("Erro: A porta precisa estar aberta para alguém sair.");
            return;
        }

        if (this.pessoasPresentes >= quantidade) {
            this.pessoasPresentes -= quantidade;
            console.log(`${quantidade} pessoa(s) saiu(aram). No elevador: ${this.pessoasPresentes}`);
        } else {
            console.log("Erro: Não há tantas pessoas assim no elevador!");
        }
    }

    public subir(): void {
        if (this.portaAberta) {
            console.log("Erro: Não é possível subir com a porta aberta!");
            return;
        }

        if (this.andarAtual < this.totalAndares) {
            this.andarAtual++;
            console.log(`Subindo... Andar atual: ${this.andarAtual}`);
        } else {
            console.log("Erro: Você já está no último andar!");
        }
    }

    public descer(): void {
        if (this.portaAberta) {
            console.log("Erro: Não é possível descer com a porta aberta!");
            return;
        }

        if (this.andarAtual > 0) {
            this.andarAtual--;
            console.log(`Descendo... Andar atual: ${this.andarAtual}`);
        } else {
            console.log("Erro: Você já está no térreo!");
        }
    }

    public status(): void {
        console.log(`--- Status: Andar ${this.andarAtual} | Pessoas: ${this.pessoasPresentes}/${this.capacidade} | Porta: ${this.portaAberta ? 'Aberta' : 'Fechada'} ---`);
    }
}

const meuElevador = new Elevador();
meuElevador.inicializar(5, 10); 

meuElevador.abrirPorta();
meuElevador.entrar(2);  
meuElevador.subir();
meuElevador.subir();
meuElevador.abrirPorta();
meuElevador.sair(1);
meuElevador.status();