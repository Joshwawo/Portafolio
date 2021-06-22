import { Component, OnInit } from '@angular/core';
import { infopagina } from '../../interfaces/info-pagina.interface';
import { InfopaginaService } from '../../services/infopagina.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfopaginaService,
              private router:Router) { }

  ngOnInit(): void {
  }

  buscarProducto(termino:string){
      if(termino.length<1){
        return;
      }
    console.log(termino)
    this.router.navigate(['/search',termino]);

  }

}
