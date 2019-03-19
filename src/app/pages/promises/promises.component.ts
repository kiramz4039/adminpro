import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.countToThree().then(
      (msg) => console.log('Terminó', msg))
      .catch ( error => console.log('Error en la promesa', error));
  }

  ngOnInit() {
  }

  countToThree(): Promise<string> {
    return new Promise((resolve, reject) => {
      let count = 0;
      let interval = setInterval(() => {
        count += 1;
        console.log(count);

        if (count === 3) {
          resolve('bien');
          clearInterval(interval);
        }
      }, 1000);
    });

  }

}
