import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { PatientsPageComponent } from "../../patients/patients-page/patients-page.component";

@Component({
  selector: 'app-consultorio-page',
  standalone: true,
  imports: [MatTabsModule, PatientsPageComponent],
  templateUrl: './consultorio-page.component.html',
  styleUrl: './consultorio-page.component.css'
})
export class ConsultorioPageComponent {

}
