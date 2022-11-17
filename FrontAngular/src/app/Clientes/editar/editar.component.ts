import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Person } from 'src/app/Modelo/Person';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  clientId: number;
  client : Person = new Person();
  constructor(private service:ServiceService, private router:Router, private route:ActivatedRoute ) {


  }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params["clienteId"];
    this.service.traerClienteById(this.clientId).subscribe(data =>{
      (console.log(data),alert("Cliente Encontrado"))
      this.client = data;
    },error=>(console.log(error),alert("La Actualizacion no se puede realizar")
    ));

  }

  onSubmit(){
    this.service.putCliente(this.clientId, this.client).subscribe( data =>{
      this.irListaClientes();
    },error => console.log(error));

  }


  irListaClientes(){
    this.router.navigate(["listar"]);
  }
}
