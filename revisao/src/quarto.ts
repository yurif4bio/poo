export class Quarto {
    private _numero: number;
    private _valor: number;

    constructor(numero: number, valor: number) {
        this._numero = numero;
        this._valor = valor;
    }

    get numero(): number { return this._numero; }
    set numero(valor: number) { this._numero = valor; }

    get valor(): number { return this._valor; }
    set valor(valor: number) { this._valor = valor; }
}