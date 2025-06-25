import { Component } from '@angular/core';
import { PatientListComponent } from "../patient-list/patient-list.component";

@Component({
  selector: 'app-patient-page',
  standalone: true,
  imports: [PatientListComponent],
  templateUrl: './patient-page.component.html',
  styleUrl: './patient-page.component.css'
})
export class PatientPageComponent {

}
