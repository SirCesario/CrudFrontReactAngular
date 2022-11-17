import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Modelo/Transaction';
import { ServiceService } from 'src/app/Service/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-movimiento',
  templateUrl: './editar-movimiento.component.html',
  styleUrls: ['./editar-movimiento.component.css']
})
export class EditarMovimientoComponent implements OnInit {

  transactionId:number;
  transaction: Transaction = new Transaction ();

  constructor(private service:ServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.transactionId = this.route.snapshot.params["movimientoId"];
    this.service.traerMovimientoById(this.transactionId).subscribe(data => {
      (console.log(data),alert("Movimiento Encontrado"));
      this.transaction= data;
    })
  }

  onSubmit(){
    this.service.putMovimiento(this.transactionId, this.transaction).subscribe(data => {
      this.irListaMovimientos();
    } )
  }

   irListaMovimientos(){
    this.router.navigate(["listarMovimientos"]);
   }

   editarMovimiento(transactionId: number){
    this.router.navigate(["editarMovimiento",transactionId])
   }
}
