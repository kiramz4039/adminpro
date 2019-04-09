import { Injectable } from '@angular/core';
import { URL_SERVICES } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() { }

  uploadFile(file: File, type: string, id: string) {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      formData.append('image', file, file.name);
      // tslint:disable-next-line:only-arrow-functions
      xhr.onreadystatechange = function() {

            // Estado 4 es cuando termina el proceso
        if (xhr.readyState === 4) {
          if (xhr.status === 200 ) {
            console.log('Imagen subida');
            resolve(JSON.parse(xhr.response));

          } else {
            console.log('Falló la subida');
            reject(xhr.response);
          }
        }
      };

      let url = URL_SERVICES + '/upload/' + type + '/' + id;
      xhr.open('PUT', url, true);
      xhr.send( formData );

    });

  }



}
