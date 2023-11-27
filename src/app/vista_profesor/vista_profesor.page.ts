import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { supabase } from './supabase';
import { Router } from '@angular/router';
import { format } from 'date-fns';


@Component({
  selector: 'app-vista_profesor',
  templateUrl: './vista_profesor.page.html',
  styleUrls: ['./vista_profesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, RouterLink,],
})

export class VistaProfesorPage {
  selectedOption: string = 'asistencia';
  nombreAsignatura: string = '';
  codAsignatura: number = 0;
  fecha: string = '';
  asistencias: any[] = [];


  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async registrarAsistencia() {
    try {
      // Define los datos a insertar en la tabla de la base de datos.
      const datosAInsertar = {
        nombre_asignatura: this.nombreAsignatura,
        cod_asignatura: this.codAsignatura,
        fecha: this.fecha,
      };

      const { data, error } = await supabase.from('crea_asistencia').upsert([datosAInsertar]);
      console.log('Datos a insertar:', this.nombreAsignatura, this.codAsignatura, this.fecha);


      if (error) {
        console.error('Error al insertar datos:', error.message);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo guardar la asistencia',
          buttons: ['OK']
        });
        await alert.present();
      } else {
        console.log('Datos insertados correctamente:', data);
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Asistencia registrada con éxito',
          buttons: ['OK']
        });
        await alert.present();
      }
    } catch (error) {
      console.error('Error al insertar datos:', error);
    }
  }
  async mostrarAsistencia() {
    try {
      // Realiza la consulta a la base de datos para obtener las asistencias registradas
      const { data, error } = await supabase
      .from('crea_asistencia')
      .select('*')
      .eq('cod_asignatura', this.codAsignatura);
  
      if (error) {
        console.error('Error al obtener datos:', error.message);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudieron obtener los datos de asistencia',
          buttons: ['OK']
        });
        await alert.present();
      } else {
        console.log('Datos de asistencia obtenidos correctamente:', data);
  
        // Asigna los datos a la propiedad asistencias
        this.asistencias = data;
  
        // Muestra una alerta indicando el éxito
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Datos de asistencia obtenidos correctamente',
          buttons: ['OK']
        });
        await alert.present();
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }
  
  goBack() {
    this.router.navigate(['/login']);
  }
}  