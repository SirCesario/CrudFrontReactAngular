import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Account} from '../../Modelo/Account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.css']
})
export class EditarCuentaComponent implements OnInit {
  accountId: number;
  account: Account = new Account ();
  constructor( private service:ServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.accountId = this.route.snapshot.params["cuentaId"];
    this.service.traerCuentaById(this.accountId).subscribe(data =>{
    (console.log(data),alert("Cuenta Encontrada"))
    this.account= data;
    },error=>(console.log(error),alert("No se pudo realizar la actualizacion")
    ));
  }

  onSubmit(){
    this.service.putCuenta(this.accountId, this.account).subscribe(data =>{
      this.irListaCuentas();
    },error=>console.log(error));
  }

  irListaCuentas(){
    this.router.navigate(["listarCuentas"]);
  }

}
