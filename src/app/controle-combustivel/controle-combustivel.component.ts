import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'controle-combustivel',
  templateUrl: './controle-combustivel.component.html',
  styleUrls: ['./controle-combustivel.component.css']
})
export class ControleCombustivelComponent implements OnInit {

  distancia: string;
  litros: string;
  consumo: (number | string);

  constructor() { }

  ngOnInit(): void {
  }

  calcular() {
    const distancia = parseFloat(this.distancia);
    const litros = parseFloat(this.litros);

    this.consumo = distancia / litros;
    this.consumo = this.consumo.toFixed(2);
  }

}
