import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: []
})
export class Graphic1Component implements OnInit {

  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data: [4500, 6000],
      type: 'pie',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Si', 'No'],
      data: [95, 5],
      type: 'bar',
      leyenda: '¿Le dan gases los frijoles?'
    },
    grafico4: {
      labels: ['No', 'Si'],
      data:  [85, 40],
      type: 'radar',
      leyenda: '¿Le importa que le den gases?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
