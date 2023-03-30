import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {



  CrearCanchas(){
    alert("Creación de canchas")
  }

  Autenticacion(){
    alert("Inicicar Sesion")
  }
  RecuperarContrasena(){
    alert("Olvidaste tu contraseña?")
  }
  Reservarcancha(){
    alert("Reservación de canchas")
  }
}
