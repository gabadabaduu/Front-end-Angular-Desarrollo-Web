import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  canchas = ['8:00 AM', '11:00 AM', '12:00 AM', '1:00 PM','3:00 PM','5:00 PM'];
}
