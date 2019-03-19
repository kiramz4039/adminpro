import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
// Pipes : retry permite realizar varios intentos antes de dar error (las condiciones del error es definido por nosotros)
// map : permite dar formato a la data
// filter : permite filtrar la información
import { retry, map, filter } from 'rxjs/operators';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.observableReturn()
    .subscribe(
      numb =>  console.log( 'Subs: ', numb ),
      error => console.log('Error en el obs', error),
      () => console.log('El observador terminó!')
      );
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  observableReturn(): Observable<any> {

    return  new Observable( (observer: Subscriber<any>) => {
      let count = 0;
      const interval = setInterval(() => {
        count ++;

        const output = {
          value: count
        };

        observer.next(output);

        // if ( count === 3 ) {
        //   clearInterval(interval);
        //   observer.complete();
        // }

        // if ( count === 2) {
        //    clearInterval(interval);
        //    observer.error('Auxilio!');
        // }

      }, 1000);
    }).pipe(
      map( resp =>  resp.value ),
      filter(( value, index ) => {
        if ((value % 2) === 1) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }

}
