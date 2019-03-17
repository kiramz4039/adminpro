import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    theme: 'default-dark'
  };

  constructor( @Inject(DOCUMENT) private documentIndex ) {
    this.loadSettings();
   }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify( this.settings ));
  }

  loadSettings() {
    if ( localStorage.getItem('settings')) {
      this.settings = JSON.parse( localStorage.getItem('settings'));
      this.applyTheme(this.settings.theme);
    } else { this.applyTheme(this.settings.theme); }
  }

  applyTheme( theme: string ) {

    const url = `assets/css/colors/${ theme }.css`;
    this.documentIndex.getElementById('themeApp').setAttribute('href', url);
    this.settings.theme = theme;
    this.saveSettings();
  }

}

interface Settings {
  theme: string;
}
