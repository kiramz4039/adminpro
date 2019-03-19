import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'Progress Bar', url: '/progress'},
        {title: 'Observables', url: '/rxjs'},
        {title: 'Gráficas', url: '/graphic1'},
        {title: 'Promesas', url: '/promises'}
      ]
    }
  ];

  constructor() { }
}
