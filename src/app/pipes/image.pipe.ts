import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from 'src/environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( img: string, type: string = 'users'): any {
    let url = URL_SERVICES + '/image';


    if (!img) {
      return url + '/users/nofound'; // El backend ya está definido para retornar una imagen por defecto
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (type) {
      case 'users':
        url += '/users/' + img;
        break;
      case 'doctors':
        url += '/users/' + img;
        break;
      case 'hospitals':
        url += '/users/' + img;
        break;
      default:
        console.log('No existe el tipo de imagen solicitado');
        url += '/users/nofound';
        break;
    }

    return url;
  }

}
