import { Injectable } from '@angular/core';
import { ClaseService } from './clase.service'; // Importa tu servicio de Clase
import { Observable, of, switchMap } from 'rxjs';
import { CursoService } from './curso.service';
@Injectable({
  providedIn: 'root',
})
export class ClasePorCursoService {
  constructor(
    private cursoService: CursoService,
    private claseService: ClaseService
  ) {}

  obtenerClasesPorCodAsignatura(codAsignatura: string): Observable<any> {
    // Primero, obtén el código de asignatura de la tabla Seccion
    return this.cursoService.obtenerCursoPorCodAsignatura(codAsignatura).pipe(
      switchMap((curso) => {
        if (curso) {
          // Luego, utiliza el código de asignatura para obtener las clases relacionadas
          return this.claseService.obtenerClasesPorCodAsignatura(curso.cod_asignatura);
        } else {
          // Maneja el caso en el que no se encuentre una sección con el código de asignatura
          return of([]);
        }
      })
    );
  }
}
