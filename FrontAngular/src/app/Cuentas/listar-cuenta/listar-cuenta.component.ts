import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Modelo/Account';

@Component({
  selector: 'app-listar-cuenta',
  templateUrl: './listar-cuenta.component.html',
  styleUrls: ['./listar-cuenta.component.css']
})
export class ListarCuentaComponent implements OnInit {
account: Account[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
     this.ListarCuentas();
  }

  ListarCuentas(){
    this.service.getCuentas().subscribe(data =>{
      this.account = data;
    })
  }

  editarCuenta(accountId: number){
    this.router.navigate(["editarCuenta",accountId])
  }

  eliminarCuenta(accountId: number){
    this.service.deleteCuenta(accountId).subscribe(data =>{
      console.log(data),alert("Se elimino la cuenta Correctamente");

      this.ListarCuentas();
    })
  }





}
