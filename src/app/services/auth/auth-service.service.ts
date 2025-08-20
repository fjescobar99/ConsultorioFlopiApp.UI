import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../app.config.server';
import { AppConfigService } from '../config/config-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
    private apiUrl: string;

    constructor(private http: HttpClient, private configUrl: AppConfigService) {
      this.apiUrl = this.configUrl.apiUrl; 
     }

  login(username: string, password: string) {
    const body = { 
      Username: username, 
      Password: password 
    };
    return this.http.post(`${this.apiUrl}auth/login`, body);
  }
    // getPacientes(paginationObj: PaginationObjectDto): Observable<ApiResponse<PacienteDto>>{
    //   return this.http.post<ApiResponse<PacienteDto>>(`https://localhost:44329/Patient/GetPacientes`,paginationObj);
    // }
}
