"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Elevador {
    andarAtual = 0;
    totalAndares = 0;
    capacidade = 0;
    pessoasPresentes = 0;
    portaAberta = false;
    // Inicializa o elevador com os parâmetros necessários
    inicializar(capacidade, totalAndares) {
        this.capacidade = capacidade;
        this.totalAndares = totalAndares;
        this.andarAtual = 0;
        this.pessoasPresentes = 0;
        this.portaAberta = false;
        console.log(`Elevador pronto! Prédio de ${totalAndares} andares. Capacidade: ${capacidade} pessoas.`);
    }
    // Abre a porta do elevador (necessário para entrar ou sair)
    abrirPorta() {
        this.portaAberta = true;
        console.log("Porta aberta.");
    }
    // Fecha a porta do elevador
    fecharPorta() {
        this.portaAberta = false;
        console.log("Porta fechada.");
    }
    // Adiciona pessoas se houver espaço e a porta estiver aberta
    entrar(quantidade = 1) {
        if (!this.portaAberta) {
            console.log("Erro: A porta precisa estar aberta para alguém entrar.");
            return;
        }
        if (this.pessoasPresentes + quantidade <= this.capacidade) {
            this.pessoasPresentes += quantidade;
            console.log(`${quantidade} pessoa(s) entrou(aram). Total agora: ${this.pessoasPresentes}`);
            this.fecharPorta(); // Regra: Após acrescentar, deve-se fechar a porta
        }
        else {
            console.log("Erro: Capacidade máxima atingida!");
        }
    }
    // Remove pessoas se houver alguém e a porta estiver aberta
    sair(quantidade = 1) {
        if (!this.portaAberta) {
            console.log("Erro: A porta precisa estar aberta para alguém sair.");
            return;
        }
        if (this.pessoasPresentes >= quantidade) {
            this.pessoasPresentes -= quantidade;
            console.log(`${quantidade} pessoa(s) saiu(aram). No elevador: ${this.pessoasPresentes}`);
        }
        else {
            console.log("Erro: Não há tantas pessoas assim no elevador!");
        }
    }
    // Sobe um andar
    subir() {
        if (this.portaAberta) {
            console.log("Erro: Não é possível subir com a porta aberta!");
            return;
        }
        if (this.andarAtual < this.totalAndares) {
            this.andarAtual++;
            console.log(`Subindo... Andar atual: ${this.andarAtual}`);
        }
        else {
            console.log("Erro: Você já está no último andar!");
        }
    }
    // Desce um andar
    descer() {
        if (this.portaAberta) {
            console.log("Erro: Não é possível descer com a porta aberta!");
            return;
        }
        if (this.andarAtual > 0) {
            this.andarAtual--;
            console.log(`Descendo... Andar atual: ${this.andarAtual}`);
        }
        else {
            console.log("Erro: Você já está no térreo!");
        }
    }
    // Método para visualizar o status atual
    status() {
        console.log(`--- Status: Andar ${this.andarAtual} | Pessoas: ${this.pessoasPresentes}/${this.capacidade} | Porta: ${this.portaAberta ? 'Aberta' : 'Fechada'} ---`);
    }
}
// --- Exemplo de Uso ---
const meuElevador = new Elevador();
meuElevador.inicializar(5, 10); // Capacidade 5, 10 andares
meuElevador.abrirPorta();
meuElevador.entrar(2); // Porta fecha automaticamente após entrar
meuElevador.subir();
meuElevador.subir();
meuElevador.abrirPorta();
meuElevador.sair(1);
meuElevador.status();
//# sourceMappingURL=index.js.map