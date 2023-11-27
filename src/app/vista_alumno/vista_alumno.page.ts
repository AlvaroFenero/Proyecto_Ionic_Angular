import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vista_alumno',
  templateUrl: './vista_alumno.page.html',
  styleUrls: ['./vista_alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VistaAlumnoPage implements OnInit {
  selectedOption: string;
  fecha: string = ''; // Asegúrate de inicializarla con un valor por defecto o deja que sea inicializada dinámicamente

  constructor() {
    this.selectedOption = 'mostrarAsistencia';
  }

  ngOnInit() {
  }

  mostrarAsistencia() {
    // Agrega la lógica necesaria para mostrar la asistencia
  }
}