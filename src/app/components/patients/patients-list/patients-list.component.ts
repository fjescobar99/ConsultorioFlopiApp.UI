import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PatientsServiceService } from '../../../services/patients/patients-service.service';
import { PaginationObjectDto } from '../../../entities/common/PaginationObjectDto';
import { ApiResponse } from '../../../entities/common/ApiResponse';
import { PacienteDto } from '../../../entities/patients/PacienteDto';
import { CommonModule, DatePipe } from '@angular/common';
import { LoadingSpinnerComponent } from "../../common/loading-spinner/loading-spinner.component";
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NewPatientFormComponent } from '../new-patient-form/new-patient-form.component';
import {
  MatDialog
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [MatTableModule, DatePipe, LoadingSpinnerComponent, CommonModule, MatPaginatorModule, MatInputModule, FormsModule, MatButtonModule, MatButtonModule, MatDividerModule, MatIconModule, MatIconModule],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.css'
})

export class PatientsListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<PacienteDto>();
  loading: boolean = false;
  error: string | null = null;
  numberOfItems: number = 0;
  displayedColumns: string[] = [
    'id',
    'dni',
    'nombre',
    'apellido',
    'email',
    'copago',
    'particular',
    'prepaga',
  ];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private patientsService: PatientsServiceService,
    private dialog: MatDialog,
  ) { 
  }
  ngOnInit(): void {
  this.getPacientes(1, 5);
  }

ngAfterViewInit(): void {
  this.paginator.page.subscribe(() => {
    const pageIndex = this.paginator.pageIndex + 1;
  console.log('cambiando de pagina')
    const pageSize = this.paginator.pageSize;
    this.getPacientes(pageIndex, pageSize);
  });
}

  
   getPacientes(page: number, rowsPerPage: number): void {
    this.loading = true;
    const obj: PaginationObjectDto = {
      orderBy: 'apellido',
      page: page,
      rowsPerPage: rowsPerPage,
      sortDirection: 'asc'
    };

    console.log(obj)
    
    this.patientsService.getPacientes(obj).subscribe({
      next: (response: ApiResponse<PacienteDto>) => {
        this.dataSource.data = response.items;
        this.numberOfItems = response.numberOfItems;
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

  openNewPatientForm(){
    let dialogRef = this.dialog.open(NewPatientFormComponent, {
    height: '400px',
    width: '600px',
  });
  dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // refrescar la tabla o mostrar mensaje
        console.log('Nuevo paciente creado:', result);
      }
    });
  }
}
