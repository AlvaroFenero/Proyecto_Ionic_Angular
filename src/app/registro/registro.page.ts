import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { supabase } from './supabase';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
})
export class RegistroPage {
  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioRegistro = this.formBuilder.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      confirmacionContraseña: ['', Validators.required],
      tipo_usuario: ['', Validators.required]
    });
  }
  async guardar() {
    const f = this.formularioRegistro.value;
 
    if (this.formularioRegistro.invalid) {
      // Maneja los datos del formulario incompletos o incorrectos si es necesario.
      return;
    }
 
    try {
      // Define los datos a insertar en la tabla de la base de datos.
      const datosAInsertar = {
        rut: f.rut,
        nombre: f.nombre,
        apellido: f.apellido,
        correo: f.correo,
        contraseña: f.contraseña,
        tipo_usuario: f.tipo_usuario,
      };
 
      // Realiza la inserción en la tabla 'mi_tabla' de la base de datos.
      const { data, error } = await supabase.from('Usuario').upsert([datosAInsertar]);
 
      if (error) {
        console.error('Error al insertar datos:', error.message);
      } else {
        console.log('Datos insertados correctamente:', data);
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error al insertar datos:', error);
    }
  }
}