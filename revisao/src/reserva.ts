import { Hospede } from "./Hospede";
import { Quarto } from "./Quarto";

export class Reserva {
    private _hospedes: Hospede[] = [];
    private _quarto: Quarto;
    private _diarias: number;
    private _total: number = 0;

    constructor(quarto: Quarto, diarias: number) {
        this._quarto = quarto;
        this._diarias = diarias;
    }

    public adicionarHospede(h: Hospede): boolean {
        if (this._hospedes.length < 3) {
            this._hospedes.push(h);
            return true;
        }
        console.log("Limite de 3 hóspedes por reserva atingido.");
        return false;
    }

    private calcularTotal(): number {
        this._total = this._diarias * this._quarto.valor;
        return this._total;
    }

    get hospedes(): Hospede[] { return this._hospedes; }
    
    get quarto(): Quarto { return this._quarto; }
    set quarto(valor: Quarto) { this._quarto = valor; }

    get diarias(): number { return this._diarias; }
    set diarias(valor: number) { this._diarias = valor; }

    get total(): number { 
        return this.calcularTotal(); 
    }
}