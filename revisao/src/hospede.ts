export class Hospede {
    private _nome: string;
    private _cpf: string;
    private _telefone: string;

    constructor(nome: string, cpf: string, telefone: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._telefone = telefone;
    }

    get nome(): string { return this._nome; }
    set nome(valor: string) { this._nome = valor; }

    get cpf(): string { return this._cpf; }
    set cpf(valor: string) { this._cpf = valor; }

    get telefone(): string { return this._telefone; }
    set telefone(valor: string) { this._telefone = valor; }
}