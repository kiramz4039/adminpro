import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public settingsService: SettingsService) { }

  ngOnInit() {
    this.applyCheck();
  }

  changeColor( value: string, linkSelected: any) {
    this.applySelect(linkSelected);
    this.settingsService.applyTheme(value);
  }

  applySelect( linkSelected: any) {

    // Manila javascript
    // Se seleccionan los elementos que poseen la clase 'selector'
    // y se les remueve la referencia a la clase 'working' y luego se le asigna al link que pasamos de parametro
    let selectors: any = document.getElementsByClassName('selector');
    for (let ref of selectors) {
      ref.classList.remove('working');
    }

    linkSelected.classList.add('working');
  }

  applyCheck() {
    let selectors: any = document.getElementsByClassName('selector');

    let theme = this.settingsService.settings.theme;

    for (let ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
