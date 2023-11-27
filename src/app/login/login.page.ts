import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertController, AnimationController, IonicModule } from '@ionic/angular';
import { supabase } from '../../../supabase';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink ,NgIf,],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  showLoginCard: boolean = false;
  showFooter = false;
  standAlone = true;



  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router,
    private animationCtrl: AnimationController
  ) {
    this.formularioLogin = this.fb.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  async iniciarSesion() {
    const credentials = this.formularioLogin.value;
  
    if (this.formularioLogin.invalid) {
      // Manejar formulario incompleto o inválido si es necesario.
      return;
    }
  
    try {
      const { data, error } = await supabase.auth.signUp({
        email: credentials.correo,
        password: credentials.contraseña
      });
  
      if (error) {
        console.error('Error al iniciar sesión:', error.message);
        // Aquí podrías mostrar un mensaje de error al usuario.
      } else {
        const user = data?.user; // Accede a la propiedad user desde data
        console.log('Inicio de sesión exitoso:', user);
  
        // Consultar el tipo de usuario en la tabla 'Usuario'
        const { data: userData, error: userError } = await supabase
          .from('Usuario')
          .select('tipo_usuario')
          .eq('correo', credentials.correo);
  
        if (userError) {
          console.error('Error al obtener tipo de usuario:', userError.message);
          // Manejar el error al obtener el tipo de usuario.
        } else {
          const tipoUsuario = userData[0]?.tipo_usuario;
  
          if (tipoUsuario === 'profesor') {
            this.router.navigate(['/vista_profesor']);
          } else if (tipoUsuario === 'estudiante') {
            this.router.navigate(['/vista_estudiante']);
          } else {
            // Tipo de usuario desconocido, manejar según sea necesario
          }
        }
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar el error al iniciar sesión.
    }
  }
  

  async recuperarContrasena() {
    this.router.navigate(['/recuperar']);
  }
}