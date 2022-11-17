import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from "../../Service/service.service";
import { Person } from 'src/app/Modelo/Person';
import { Account } from 'src/app/Modelo/Account';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit {
  client: Person[];
  account: Account[];

  constructor(private service:ServiceService, private router:Router) {


   }

   ngOnInit():void {
      this.ListarClientes();
    }

    ListarClientes(){
      this.service.getClientes().subscribe(data =>{
        this.client = data;
      })
    }

      editar(clientId: number){
        this.router.navigate(["editar",clientId]);
      }

    eliminar(clientId: number){
      this.service.deletecliente(clientId).subscribe(data =>{
        console.log(data);

        this.ListarClientes();
      })
    }

    traerCuentasByClienteId(clientId: number){
      this.router.navigate(["",clientId])
    }


}
