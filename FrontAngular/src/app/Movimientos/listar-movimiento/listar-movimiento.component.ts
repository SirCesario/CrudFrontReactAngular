import { ServiceService } from 'src/app/Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Modelo/Transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-movimiento',
  templateUrl: './listar-movimiento.component.html',
  styleUrls: ['./listar-movimiento.component.css']
})
export class ListarMovimientoComponent implements OnInit {

  transaction: Transaction[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.ListarMovimientos();
  }

  ListarMovimientos(){
    this.service.getMovimientos().subscribe(data =>{
      this.transaction = data;
    })
  }

  editarMovimiento(transactionId: number){
    this.router.navigate(["editarMovimiento",transactionId]);
  }

  eliminarMovimiento(transactionId: number){
    this.service.deleteMovimiento(transactionId).subscribe(data => {
      console.log(data);
      this.ListarMovimientos();
    })
  }
}
