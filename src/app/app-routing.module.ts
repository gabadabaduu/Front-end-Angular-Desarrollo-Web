import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanchasComponent } from './pages/canchas/canchas.component';
import { ContrasenaOlvidadaComponent } from './pages/iniciar-sesion/contrasena-olvidada/contrasena-olvidada.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { IniciarSesionComponent } from "./pages/iniciar-sesion/iniciar-sesion.component";
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HorariosComponent } from './pages/canchas/Tipos/horarios.component';
import { ReservasComponent } from './pages/canchas/reservas/reservas.component';
import { CancelarComponent } from './pages/canchas/reservas/cancelar/cancelar.component';
import { CrearcuentaComponent } from './pages/iniciar-sesion/crearcuenta/crearcuenta.component';


const routes: Routes = [
  { path: "Home", component: HomepageComponent },
  { path: "iniciar-sesion", component: IniciarSesionComponent },
  { path: "Registrar-cancha", component: RegistroComponent},
  {path: "Olvidocontrasena", component: ContrasenaOlvidadaComponent},
  {path: "Canchas", component: CanchasComponent},
  {path:"Horarios", component: HorariosComponent},
  {path:"Reserva", component: ReservasComponent},
  {path:"Cancelar", component: CancelarComponent},
  {path:"CrearCuenta", component: CrearcuentaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
  RoutingComponent = [HomepageComponent,IniciarSesionComponent,RegistroComponent,ContrasenaOlvidadaComponent,
    CanchasComponent,HorariosComponent, ReservasComponent];
