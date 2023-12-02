import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
    URL_BASE = 'https://efxijvvxlfnfjjjugldg.supabase.co/rest/v1/'
    supabaseHeaders = new HttpHeaders().set("apiKey",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmeGlqdnZ4bGZuZmpqanVnbGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODg3NjIsImV4cCI6MjAxMTI2NDc2Mn0.FVEgbY2cdX_mDcU1kL6xx-5NwAZhg4iBQzR0NpZ3oks')
    

  constructor(private http: HttpClient) {}

  obtenerCursoPorCodAsignatura(codAsignatura: string): Observable<any> {
    // Realiza una solicitud HTTP (GET) para obtener una sección por su código de asignatura
    const url = `${this.URL_BASE}/CURSO?cod_asignatura=${codAsignatura}`;

    return this.http.get(url);
  }
  obtenerClasesPorCodAsignatura(codAsignatura: string): Observable<any> {
    // Realiza una solicitud HTTP (GET) para obtener clases por su código de asignatura
    const url = `${this.URL_BASE}/CLASE?cod_asignatura=${codAsignatura}`;

    return this.http.get(url);
  }
}