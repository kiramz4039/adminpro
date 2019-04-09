import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient} from '@angular/common/http';
import { URL_SERVICES } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';
import { UploadFileService } from '../uploadFile/upload-file.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: string;

  constructor(public http: HttpClient, public router: Router, public uploadFileService: UploadFileService) {
    this.getStorage();
  }

  setStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  getStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }


  // Login a través del servicio de google
  loginGoogle(token: string ) {
    let url = URL_SERVICES + '/login/google';
    return this.http.post(url, { token } )
                      .pipe(map((response: any) => {
                        this.setStorage(response.id, response.token, response.user);
                        return true;
                      }));
  }

  // Login normal a través del registro del sistema
  login( user: User, rememberme: boolean = false) {

    if ( rememberme ) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICES + '/login';
    return this.http.post( url, user)
                .pipe(map( (response: any) => {
                    this.setStorage(response.id, response.token, response.user);
                    return true;
                }));
  }

  // Cerrar sesión
  logout() {
    this.user = null;
    this.token = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

  createUser(user: User) {
    let url = URL_SERVICES + '/user';
    return this.http.post(url, user)
                .pipe(map( (response: any) => {
                    Swal.fire('Usuario creado', user.email, 'success');
                }));
  }

  updateUser(user: User) {
    let url = URL_SERVICES + '/user/' + user._id + '?token=' + this.token;
    return this.http.put(url, user)
                    .pipe(map((response: any) => {
                      this.setStorage(response.user._id, this.token, user);
                      Swal.fire('Usuario actualizado', user.name, 'success');
                      return true;
                    }));
  }


  // Saber si está logueado
  loggedOn() {
    return (this.token.length > 5) ? true : false;
  }

  changeImage(file: File , id: string ) {
    this.uploadFileService.uploadFile(file, 'users', id)
                          .then((response: any) => {
                             this.user.img = response.user.img;
                             Swal.fire('Imagen actualizada', this.user.name, 'success');
                             this.setStorage(id, this.token, this.user);
                          })
                          .catch( response => {
                            console.log(response);
                          });
  }

}
