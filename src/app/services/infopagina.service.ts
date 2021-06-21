import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infopagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {
  info: infopagina={};
  cargada=false;


  constructor(private http: HttpClient) {
    console.log('Servicio de infopaigna Listo')

    //Leer el archivo json
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: infopagina)=>{
        this.cargada=true;
        this.info=resp;
        console.log(resp);
      })
   }
}
