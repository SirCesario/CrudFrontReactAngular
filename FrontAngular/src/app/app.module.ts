import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarComponent } from './Clientes/listar/listar.component';
import { CrearComponent } from './Clientes/crear/crear.component';
import { EditarComponent } from './Clientes/editar/editar.component';
import { EliminarComponent } from './Clientes/eliminar/eliminar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ServiceService} from "../app/Service/service.service";
import { HttpClientModule} from "@angular/common/http";
import { CrearCuentaComponent } from './Cuentas/crear-cuenta/crear-cuenta.component';
import { ListarCuentaComponent } from './Cuentas/listar-cuenta/listar-cuenta.component';
import { EditarCuentaComponent } from './Cuentas/editar-cuenta/editar-cuenta.component';
import { EliminarCuentaComponent } from './Cuentas/eliminar-cuenta/eliminar-cuenta.component';
import { CrearMovimientoComponent } from './Movimientos/crear-movimiento/crear-movimiento.component';
import { EditarMovimientoComponent } from './Movimientos/editar-movimiento/editar-movimiento.component';
import { EliminarMovimientoComponent } from './Movimientos/eliminar-movimiento/eliminar-movimiento.component';
import { ListarMovimientoComponent } from './Movimientos/listar-movimiento/listar-movimiento.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent,
    CrearCuentaComponent,
    ListarCuentaComponent,
    EditarCuentaComponent,
    EliminarCuentaComponent,
    CrearMovimientoComponent,
    EditarMovimientoComponent,
    EliminarMovimientoComponent,
    ListarMovimientoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
