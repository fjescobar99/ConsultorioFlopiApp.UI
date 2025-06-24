import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { PatientPageComponent } from "../../patients/patient-page/patient-page.component";

@Component({
  selector: 'app-consultorio-page',
  standalone: true,
  imports: [MatTabsModule, PatientPageComponent],
  templateUrl: './consultorio-page.component.html',
  styleUrl: './consultorio-page.component.css'
})
export class ConsultorioPageComponent {

}
