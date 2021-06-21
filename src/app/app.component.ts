import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InfopaginaService } from './services/infopagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  constructor(public InfopaginaService: InfopaginaService,public productosServices:ProductosService) {
    console.log()
  }
  
}
