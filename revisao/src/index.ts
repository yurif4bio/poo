import { Hospede } from "./Hospede";
import { Quarto } from "./Quarto";
import { Reserva } from "./Reserva";

const quarto101 = new Quarto(101, 150.00); 
const reserva = new Reserva(quarto101, 3); 

const h1 = new Hospede("João Silva", "123.456.789-00", "99999-9999");
reserva.adicionarHospede(h1);

console.log(`Reserva para o quarto: ${reserva.quarto.numero}`);
console.log(`Valor Total: R$ ${reserva.total}`); // Deve resultar em 450