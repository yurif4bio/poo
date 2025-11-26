import { Component } from '@angular/core';

@Component({
  selector: 'app-diario',
  imports: [],
  templateUrl: './diario.html',
  styleUrl: './diario.scss',
})
export class Diario {
  poo: DiarioTurma 
  constructor () {
    this.poo = new DiarioTurma('TSI2.2025.POO', 
      'Programação Orientada a Objetos',
      'Bruno Gomes'
    )
  }
}
