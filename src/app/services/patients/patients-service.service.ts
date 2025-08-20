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
  private apiUrl: string= "";
 constructor(private http: HttpClient, private configUrl: AppConfigService) {
      this.apiUrl = this.configUrl.apiUrl; 
     }

  getPacientes(paginationObj: PaginationObjectDto): Observable<ApiResponse<PacienteDto>>{
    return this.http.post<ApiResponse<PacienteDto>>(`${this.apiUrl}Patient/GetPatients`,paginationObj);
  }
}
