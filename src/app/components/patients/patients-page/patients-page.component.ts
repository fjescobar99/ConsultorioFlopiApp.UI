import { Component } from '@angular/core';
import { PatientsListComponent } from '../patients-list/patients-list.component';

@Component({
  selector: 'app-patients-page',
  standalone: true,
  imports: [PatientsListComponent],
  templateUrl: './patients-page.component.html',
  styleUrl: './patients-page.component.css'
})
export class PatientsPageComponent {

}
