import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimationController, IonicModule } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router,
    private animationCtrl: AnimationController
  ) {
    this.formularioLogin = this.fb.group({
      correo: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    // Código de inicialización aquí
  }

  async ingresar() {
    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario');

    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);

      if (usuario.correo == f.correo && usuario.contraseña == f.contraseña) {
        console.log('Bienvenido');
        // Redirigir a la página "mostrar" después de un inicio de sesión exitoso
        this.router.navigate(['/mostrar']);
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos ingresados no son válidos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      // No se encontró usuario registrado
      const alert = await this.alertController.create({
        header: 'Usuario no registrado',
        message:
          'No se ha registrado ningún usuario en la aplicación. ¿Desea registrarse ahora?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('El usuario eligió cancelar');
            },
          },
          {
            text: 'Registrarse',
            handler: () => {
              console.log('El usuario eligió registrarse');
              // Aquí puedes redirigir al usuario a la página de registro
              this.router.navigate(['/registro']);
            },
          },
        ],
      });
      await alert.present();
    }
  }

  async recuperarContrasena() {
      this.router.navigate(['/recuperar']);
    }
  }
