import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vista_apoderado',
  templateUrl: './vista_apoderado.page.html',
  styleUrls: ['./vista_apoderado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class VistaApoderadoPage implements OnInit {
  selectedOption: string = '';
  alumno: any;
  // Datos del alumno (debes completar estos datos con la información correcta)
  datosAlumno = {
    nombre: 'Nombre del Alumno',
    rutAlumno: '12345678-9',
    curso: 'Curso del Alumno',
    profesor: 'Profesor del Alumno'
  };

  // Datos para el formulario de registro de asistencia
  datosAsistencia = {
    nombre: '',
    rutAlumno: '',
    curso: '',
    estadoAsistencia: 'presente',
    dia: ''
  };

  // Datos para el formulario de registro de nota
  datosNota = {
    nombre: '',
    rutAlumno: '',
    curso: '',
    actividad: '',
    nota: 0,
    fecha: ''
  };

  // Datos para el formulario de registro de actividad
  datosActividad = {
    nombre: '',
    rutAlumno: '',
    curso: '',
    fecha: '',
    actividad: ''
  };

  // Datos para el formulario de registro de comunicación
  datosComunicacion = {
    rutAlumno: '',
    mensaje: '',
    fecha: ''
  };
  parametro: string | null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.parametro = this.route.snapshot.paramMap.get('parametro');
  }

  ngOnInit() {
    // Inicializa componentes al inicio
  }

  registrarAsistencia() {
    // Lógica para registrar asistencia
  }

  registrarNota() {
    // Lógica para registrar nota
  }

  registrarActividad() {
    // Lógica para registrar actividad
  }

  registrarComunicacion() {
    // Lógica para registrar comunicación
  }

  responderComunicacion() {
    // Lógica para responder a una comunicación
  }
}
