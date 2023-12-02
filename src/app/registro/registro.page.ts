import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Injectable } from "@angular/core";
import { UserModel } from '../models/UserModel';
import { Subscription } from '@supabase/supabase-js';
import { RegistroService } from 'src/service/registro.service';
import { HttpClientModule } from '@angular/common/http';



@Injectable({ 
  providedIn: 'root' 
})

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterLink],
  providers: [UserService]})
  
export class RegistroPage {
  userLoginModal: UserModel = {
    rut: '',
    nombre: '',
    correo: '',
    contrasena: '',
    tipo_usuario: ''
  };


  public userExist?: UserModel;
  public userList$!: Subscription;
  public userList: UserModel[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private registroService: RegistroService) {}

  async registrarUsuario() {
    try {
      // Lógica de validación del formulario aquí si es necesario
  
      // Llamada al servicio de registro para crear un nuevo usuario en Supabase
      const { user, error } = await this.registroService.registrarUsuario(
        this.userLoginModal.correo,
        this.userLoginModal.contrasena
      );
  
      if (error) {
        console.error('Error al registrar usuario:', error.message);
        // Puedes mostrar un mensaje de error al usuario si lo deseas
      } else {
        console.log('Usuario registrado correctamente:', user);
        // Puedes redirigir al usuario a otra página después del registro si es necesario
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Manejo de errores generales
    }
  }
  
  guardar() {
    // Implementa la lógica de guardado aquí
    console.log('Función guardar() ejecutada');
  }
}