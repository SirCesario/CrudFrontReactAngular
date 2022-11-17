import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Modelo/Person';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearComponent implements OnInit {

  client : Person = new Person();

    constructor(private router:Router, private service:ServiceService) {



    }
        ngOnInit(): void {

        }

          guardarCliente(){
          this.service.registrarCliente(this.client).subscribe(dato =>{
            (console.log(dato),alert("Cliente Creado"))
            this.irListaClientes();
          });

        }



        irListaClientes(){
          this.router.navigate(["listar"]);
        }

        onSubmit(){
          console.log(this.client);
          this.guardarCliente();
        }

  }
