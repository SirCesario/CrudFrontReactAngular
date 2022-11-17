import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Account} from 'src/app/Modelo/Account';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  account : Account = new Account();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  crearCuenta(){
    this.service.postCuenta(this.account).subscribe(data =>{
      (console.log(data),alert("Cuenta Creada"));
      this.posCuenta();
    })

  }

  posCuenta(){
    this.router.navigate(["listarCuentas"]);
  }

  onSubmit(){
    console.log(this.account);
    this.crearCuenta();

  }


}
