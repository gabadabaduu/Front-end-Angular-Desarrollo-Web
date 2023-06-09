import { Component } from '@angular/core';

import { password } from 'src/app/reiniciar_password';
@Component({
  selector: 'app-contrasena-olvidada',
  templateUrl: './contrasena-olvidada.component.html',
  styleUrls: ['./contrasena-olvidada.component.css']
})
export class ContrasenaOlvidadaComponent {
  equipo = ['Real madrid', 'messi', 'bicho', 'Barcelona'];

  model = new password('Mario Luigi', 'Mario Luigi', 'dhgfowh', 'Ciudad Vinotinto');
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  
  newHero() {
  this.model = new password('','hola','', '');
  }
  
  skyDog(): password {
  const mypassword =  new password('gug', 'SkyDog',
                     'Fetch any object at any distance',
                     'Leslie Rollover');
  console.log('My hero is called ' + mypassword.username); // "My hero is called SkyDog"
  return mypassword;
  }
  
  //////// NOT SHOWN IN DOCS ////////
  
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
  return form && form.controls.name &&
  form.controls.name.value; // Dr. IQ
  
  }
}
