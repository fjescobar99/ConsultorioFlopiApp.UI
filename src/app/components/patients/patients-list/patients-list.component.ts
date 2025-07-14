import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PatientsServiceService } from '../../../services/patients/patients-service.service';
import { PaginationObjectDto } from '../../../entities/common/PaginationObjectDto';
import { ApiResponse } from '../../../entities/common/ApiResponse';
import { PacienteDto } from '../../../entities/patients/PacienteDto';
import { DatePipe } from '@angular/common';
import { debug } from 'console';

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [MatTableModule, DatePipe],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.css'
})

export class PatientsListComponent implements OnInit {
  datasource: PacienteDto[] = [];

  constructor(private patientsService: PatientsServiceService) { 
  }

  ngOnInit(): void {
    const obj: PaginationObjectDto = {
      orderBy: 'apellido',
      page: 1,
      rowsPerPage: 5,
      sortDirection: 'asc'
    }
    debugger;
    this.patientsService.getPacientes(obj)
    .subscribe((response: ApiResponse<PacienteDto>) => { 
      console.log(response);
      this.datasource = response.items;
    })
  }

  displayedColumns: string[] = [
    'id',
    'dni',
    'nombre',
    'apellido',
    'domicilio',
    'email',
    'fechaNac',
    'ocupacion',
    'profesion',
    'antecedentesClinicos',
    'copago',
    'estadoCivil',
    'grupoFliar',
    'particular',
    'prepaga',
    'valorConsulta'
  ];
  
}
