import { CrearMovimientoComponent } from './Movimientos/crear-movimiento/crear-movimiento.component';
import { ListarMovimientoComponent } from './Movimientos/listar-movimiento/listar-movimiento.component';
import { EditarCuentaComponent } from './Cuentas/editar-cuenta/editar-cuenta.component';
import { CrearCuentaComponent } from './Cuentas/crear-cuenta/crear-cuenta.component';
import { ListarCuentaComponent } from './Cuentas/listar-cuenta/listar-cuenta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './Clientes/crear/crear.component';
import { EditarComponent } from './Clientes/editar/editar.component';
import { EliminarComponent } from './Clientes/eliminar/eliminar.component';
import { ListarComponent } from './Clientes/listar/listar.component';


const routes: Routes = [
  {path: "listar", component:ListarComponent},
  {path: "crear",component:CrearComponent},
  {path: "editar/:clienteId", component:EditarComponent},
  {path: "eliminar", component:EliminarComponent},
  {path: "listarCuentas", component:ListarCuentaComponent},
  {path: "crearCuentas", component:CrearCuentaComponent},
  {path: "editarCuenta/:cuentaId", component:EditarCuentaComponent},
  {path: "eliminarCuenta", component:EditarCuentaComponent},
  {path: "listarMovimientos", component:ListarMovimientoComponent},
  {path: "crearMovimientos", component:CrearMovimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
