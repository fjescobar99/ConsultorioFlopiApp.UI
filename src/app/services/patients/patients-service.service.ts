import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteDto } from '../../entities/patients/PacienteDto';
import { PaginationObjectDto } from '../../entities/common/PaginationObjectDto';
import { AppConfigService } from '../config/config-service.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsServiceService {

  private config = inject(AppConfigService);

  constructor(private http: HttpClient) { }

  getPacientes(paginationObj: PaginationObjectDto): Observable<PacienteDto>{
    return this.http.post<PacienteDto>(`${this.config.apiUrl}/pacientes`,paginationObj);
  }
}
