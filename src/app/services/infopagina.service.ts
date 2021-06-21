import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infopagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {
  info: infopagina={};
  cargada=false;
  
  equipo: any[]=[];

  constructor(private http: HttpClient) {
   // console.log('Servicio de infopaigna Listo')
      this.cargarInfo();
      this.cargarEquipo();
 
   }

   private cargarInfo(){
       //Leer el archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: infopagina)=>{
      this.cargada=true;
      this.info=resp;
      
    })
   }

   private cargarEquipo(){
      //this.equipo=resp
      this.http.get('https://angular-html-40c07-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp:any)=>{
      this.equipo=resp;
      console.log(resp);
    })
   }
}
