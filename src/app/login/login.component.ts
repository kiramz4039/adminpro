import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Permite cargar los js y jquery externos al angular y al typescript
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  enter() {
    this.router.navigate(['/dashboard']);
  }
}
