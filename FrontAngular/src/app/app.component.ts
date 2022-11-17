import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontAngular';


  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Crear(){
    this.router.navigate(["crear"]);
  }

  ListarCuentas(){
    this.router.navigate(["listarCuentas"]);
  }

  CrearCuentas(){
    this.router.navigate(["crearCuentas"]);
  }

  ListarMovimientos(){
    this.router.navigate(["listarMovimientos"]);
  }

  CrearMovimientos(){
    this.router.navigate(["crearMovimientos"]);
  }


}
