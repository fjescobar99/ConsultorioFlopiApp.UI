import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PatientsServiceService } from '../../../services/patients/patients-service.service';
import { PaginationObjectDto } from '../../../entities/common/PaginationObjectDto';
import { ApiResponse } from '../../../entities/common/ApiResponse';
import { PacienteDto } from '../../../entities/patients/PacienteDto';
import { CommonModule, DatePipe } from '@angular/common';
import { LoadingSpinnerComponent } from "../../common/loading-spinner/loading-spinner.component";
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [MatTableModule, DatePipe, LoadingSpinnerComponent, CommonModule, MatPaginatorModule],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.css'
})

export class PatientsListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<PacienteDto>();
  loading: boolean = false;
  error: string | null = null;
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
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private patientsService: PatientsServiceService) { 
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.page.subscribe(() => {
      const pageIndex = this.paginator.pageIndex + 1; // Angular empieza en 0
      const pageSize = this.paginator.pageSize;
      this.getPacientes(pageIndex, pageSize);
    });
  }

  ngOnInit(): void {
    this.loading = true;
    const obj: PaginationObjectDto = {
      orderBy: 'apellido',
      page: 1,
      rowsPerPage: 5,
      sortDirection: 'asc'
    }
    this.patientsService.getPacientes(obj)
    .subscribe({
      next: (response: ApiResponse<PacienteDto>) => { 
      this.dataSource.data = response.items;
    },
    error: () => {this.error = 'Hubo un error al cargar los pacientes'; this.loading = false;},
    complete: () => this.loading = false
  }
  )
  }
   getPacientes(page: number, rowsPerPage: number): void {
    this.loading = true;
    const obj: PaginationObjectDto = {
      orderBy: 'apellido',
      page: page,
      rowsPerPage: rowsPerPage,
      sortDirection: 'asc'
    };

    this.patientsService.getPacientes(obj).subscribe({
      next: (response: ApiResponse<PacienteDto>) => {
        this.dataSource.data = response.items;
      },
      error: () => {
        this.error = 'Hubo un error al cargar los pacientes';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  
  
}
