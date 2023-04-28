import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , RoutingComponent} from './app-routing.module';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ContrasenaOlvidadaComponent } from './pages/iniciar-sesion/contrasena-olvidada/contrasena-olvidada.component';
import { CanchasComponent } from './pages/canchas/canchas.component';
import { HorariosComponent } from './pages/canchas/Tipos/horarios.component';
import { ReservasComponent } from './pages/canchas/reservas/reservas.component';
import { CancelarComponent } from './pages/canchas/reservas/cancelar/cancelar.component';
import { UsuarioFormComponent } from './pages/iniciar-sesion/Usuario-form/usuario-form.component';
import { canchasFormComponent } from './pages/canchas/canchas-forms/canchas-forms.component';
import { FormsModule } from '@angular/forms';
import { CrearcuentaComponent } from './pages/iniciar-sesion/crearcuenta/crearcuenta.component';
import { BuenosAiresComponent } from './pages/canchas/Tipos/buenos-aires/buenos-aires.component';
import { CampinComponent } from './pages/canchas/Tipos/campin/campin.component';
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { SantiagoComponent } from './pages/canchas/Tipos/santiago/santiago.component';
import { VinotintoComponent } from './pages/canchas/Tipos/vinotinto/vinotinto.component';


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
    UsuarioFormComponent,
    canchasFormComponent,
    CrearcuentaComponent,
    BuenosAiresComponent,
    CampinComponent,
    AplicacionComponent,
    SantiagoComponent,
    VinotintoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class AppModule { }
