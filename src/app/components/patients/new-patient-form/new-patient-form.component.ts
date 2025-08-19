import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-new-patient-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './new-patient-form.component.html',
  styleUrl: './new-patient-form.component.css'
})
export class NewPatientFormComponent {

}
