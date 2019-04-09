import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;

  uploadImage: File;
  tempImage: any;

  constructor(public userService: UserService) {
    this.user = userService.user;
  }

  ngOnInit() {
  }

  save( user: User) {
    this.user.name = user.name;
    if ( !this.user.google ) {
      this.user.email = user.email;
    }
    this.userService.updateUser(this.user)
                    .subscribe(response => {});

  }

  selectImage( file: File ) {

    if (!file) {
      this.uploadImage = null;
      return;
    }
    if (file.type.indexOf('image')) {
      Swal.fire('Solo son permitidas las imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.uploadImage = null;
      return;
    }
    this.uploadImage = file;

    let reader = new FileReader();
    let urlTempImage = reader.readAsDataURL (file);

    reader.onloadend = () => this.tempImage = reader.result;

  }

  changeImage() {
    this.userService.changeImage( this.uploadImage, this.user._id );
  }


}
