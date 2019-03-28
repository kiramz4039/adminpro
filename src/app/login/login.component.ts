import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';


// Permite cargar los js y jquery externos al angular y al typescript
declare function init_plugins();

// declaramos las funciones de la clase que instanciamos en l index.html
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  rememberme: boolean = false;
  // vvariable autentificación de google
  auth2: any;

  constructor(public router: Router,
              public userService: UserService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.rememberme = true;
    }
  }

  // Permite capturar la información del inicio de sesión de google
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '102553060635-ve6uu9n3po32cm8kb46cdistrq1c5lec.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin( document.getElementById('btnGoogle'));

    });
  }
    // Permite realizar la acción de inicio de sesión a través de la cuenta de google,
    // obtiene el token y lo envia al servicio del backend para loguear
    attachSignin( element ) {
      this.auth2.attachClickHandler( element, {}, ( googleUser ) => {
        let token = googleUser.getAuthResponse().id_token;
        this.userService.loginGoogle(token)
                        .subscribe(response => window.location.href = '#/dashboard');
      });
    }


  enter( formLogin: NgForm) {
    if ( formLogin.invalid ) {
      return;
    }

    let user = new User(null, formLogin.value.email, formLogin.value.password);

    this.userService.login(user, formLogin.value.rememberme)
                    .subscribe(correct => this.router.navigate(['/dashboard']));

    // this.router.navigate(['/dashboard']);
  }
}
