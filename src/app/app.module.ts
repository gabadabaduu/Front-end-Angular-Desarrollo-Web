import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ContrasenaOlvidadaComponent } from './pages/iniciar-sesion/contrasena-olvidada/contrasena-olvidada.component';
import { CanchasComponent } from './pages/canchas/canchas.component';
import { HorariosComponent } from './pages/canchas/horarios/horarios.component';
import { ReservasComponent } from './pages/canchas/reservas/reservas.component';
import { CancelarComponent } from './pages/canchas/reservas/cancelar/cancelar.component';
import { UsuarioFormComponent } from './pages/iniciar-sesion/Usuario-form/usuario-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    RegistroComponent,
    ContrasenaOlvidadaComponent,
    CanchasComponent,
    HorariosComponent,
    ReservasComponent,
    CancelarComponent,
    UsuarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
