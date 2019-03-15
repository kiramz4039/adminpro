import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';


@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {
  @ViewChild('txtPercent') txtPercent: ElementRef;
  @Input() legend: string = 'Leyenda';
  @Input() percent: number = 0;
  @Output() outputValue: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue: number) {

    if (newValue >= 100 ) {
      this.percent = 100;
    } else if (newValue <= 0) {
      this.percent = 0;
    } else { this.percent = newValue; }
    this.txtPercent.nativeElement.value = this.percent;
    this.outputValue.emit(this.percent);
  }

  changeValue( value: number ) {
    this.percent +=  value;
    if (this.percent >= 100 ) { this.percent = 100; }
    if (this.percent <= 0) { this.percent = 0; }
    this.outputValue.emit(this.percent);
    this.txtPercent.nativeElement.focus();
  }

}
