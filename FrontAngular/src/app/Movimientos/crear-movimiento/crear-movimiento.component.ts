import { Transaction } from 'src/app/Modelo/Transaction';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-crear-movimiento',
  templateUrl: './crear-movimiento.component.html',
  styleUrls: ['./crear-movimiento.component.css']
})
export class CrearMovimientoComponent implements OnInit {
  transaction: Transaction = new Transaction();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  crearMovimiento(){
    this.service.postMovimiento(this.transaction).subscribe(data =>{
      (console.log(data),alert("Movimiento Creado"));
      this.postMovimiento();
    },error=>(console.log(error),alert("Movimiento Creado")))
  }

  postMovimiento(){
    this.router.navigate(["listarMovimientos"]);
  }

  onSubmit(){
    console.log(this.transaction);
    this.crearMovimiento();

  }
}
