import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { supabase } from './supabase';

@Component({
  selector: 'app-vista_profesor',
  templateUrl: './vista_profesor.page.html',
  styleUrls: ['./vista_profesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, RouterLink, HttpClientModule],
})
export class VistaProfesorPage {

  selectedOption: string = 'asistencia';
  nombreDelUsuario: string;
  alumno: string = '';
  rutAlumno: string = '';
  curso: string = '';
  actividad: string = '';
  nota: number = 0;
  fecha: string = '';
  estadoAsistencia: string = 'presente';
  dia: string = '';
  mensaje: string = '';
  fechaComunicacion: string = '';

  constructor(
    private alertController: AlertController,
    private http: HttpClient,
    private router: Router
  ) {
    this.nombreDelUsuario = localStorage.getItem('nombre') || 'profesor';
  }

  async registrarAsistencia() {
    const data = {
      nombre: this.alumno,
      rut: this.rutAlumno,
      curso: this.curso,
      asistencia: this.estadoAsistencia,
      dia: this.dia,
    };

    const endpoint = 'https://efxijvvxlfnfjjjugldg.supabase.co'; // Reemplaza con tu URL de Supabase
    const headers = new HttpHeaders()
      .set('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmeGlqdnZ4bGZuZmpqanVnbGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODg3NjIsImV4cCI6MjAxMTI2NDc2Mn0.FVEgbY2cdX_mDcU1kL6xx-5NwAZhg4iBQzR0NpZ3oksyour-supabase-api-key')
      .set('Content-Type', 'application/json');

    this.http.post(endpoint, data, { headers }).subscribe(
      async (res) => {
        const alert = await this.alertController.create({
          header: 'Registro Exitoso',
          message: 'Asistencia guardada con éxito',
          buttons: ['OK']
        });

        await alert.present();
      },
      async (error) => {
        console.error(error);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo guardar la asistencia',
          buttons: ['OK']
        });

        await alert.present();
      }
    );
  }


  async registrarNota() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'La nota fue ingresada correctamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async registrarActividad() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Su actividad fue guardada con éxito',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  async registrarComunicacion() {
    const alert = await this.alertController.create({
      header: 'Excelente',
      message: 'Su comunicado fue enviado con éxito',
      buttons: ['OK']
    });
  
    await alert.present();
    this.router.navigate(['/login']);
  }
  
}

