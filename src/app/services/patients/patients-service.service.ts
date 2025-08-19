import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteDto } from '../../entities/patients/PacienteDto';
import { PaginationObjectDto } from '../../entities/common/PaginationObjectDto';
import { AppConfigService } from '../config/config-service.service';
import { ApiResponse } from '../../entities/common/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class PatientsServiceService {

  // private config = inject(AppConfigService);
  constructor(private http: HttpClient) { }

  getPacientes(paginationObj: PaginationObjectDto): Observable<ApiResponse<PacienteDto>>{
    return this.http.post<ApiResponse<PacienteDto>>(`https://localhost:44329/Patient/GetPacientes`,paginationObj);
  }
}
