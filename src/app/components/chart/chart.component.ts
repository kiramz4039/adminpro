import { Component, OnInit, Input } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: []
})
export class ChartComponent implements OnInit {

  @Input() public ChartLabels: Label[] = [];
  @Input() public ChartData: SingleDataSet = [];
  @Input() public ChartType: string = '';
  @Input() public ChartLegend = true;
  public ChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
