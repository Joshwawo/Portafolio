import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando=true;
  productos: Producto[]=[];

  constructor(private htttp:HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.htttp.get('https://angular-html-40c07-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:Producto[])=>{
      console.log(resp);
      
      this.productos=resp;
      this.cargando=false;
      
    }
      );
  }
}

