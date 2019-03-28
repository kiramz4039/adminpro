import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(  public userService: UserService,
                public router: Router) { }

  compireField(field1: string, field2: string) {
    return (group: FormGroup) => {
      let string1 = group.controls[field1].value;
      let string2 = group.controls[field2].value;

      if (string1 === string2) { return null; }

      return {
        compire: true
      };
    };
  }

  ngOnInit() {
    init_plugins();
    this.formRegister = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirm: new FormControl(null, [Validators.required]),
      conditions: new FormControl( false )
    }, { validators: this.compireField( 'password', 'confirm') } );
    // Validación especial para todo el formulario
  }

  registerUser() {
    if (this.formRegister.invalid) {
      return;
    }
    if (!this.formRegister.value.conditions ) {
      Swal.fire('Importante', 'Debe de aceptar las condiciones', 'warning');
      return;
    }

    let user = new User(
      this.formRegister.value.name,
      this.formRegister.value.email,
      this.formRegister.value.password
    );

    this.userService.createUser( user )
                    .subscribe(response =>  this.router.navigate(['/login']));
  }

}
