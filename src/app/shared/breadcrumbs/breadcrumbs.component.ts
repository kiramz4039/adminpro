import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titleDataRoute: string;
  constructor(private router: Router,
              private title: Title,
              private meta: Meta) {
    this.getDataRoute()
    .subscribe( data => {
      // Obtener la data que pasamos a través de las rutas en pages-routing.module.ts
      this.titleDataRoute = data.title;

      // Propiedad title importada de angular que permitecambiar el título de la página
      this.title.setTitle(this.titleDataRoute);

      // Permite agregar metas a la página para facilitar las busquedas de google y otras caracteristicas
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titleDataRoute
      };

      this.meta.updateTag(metaTag);


      // console.log(data);

    });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data)
    );
  }

}
