import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; // Importa los módulos necesarios
import { Router } from '@angular/router'; // Importa Router para la navegación
import { AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router // Inyecta el Router
  ) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
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

      if (usuario.nombre == f.nombre && usuario.contraseña == f.contraseña) {
        console.log('Bienvenido');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos ingresados no son válidos',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    } else {
      // No se encontró usuario registrado
      const alert = await this.alertController.create({
        header: 'Usuario no registrado',
        message: 'No se ha registrado ningún usuario en la aplicación. ¿Desea registrarse ahora?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('El usuario eligió cancelar');
            }
          },
          {
            text: 'Registrarse',
            handler: () => {
              console.log('El usuario eligió registrarse');
              // Aquí puedes redirigir al usuario a la página de registro
              this.router.navigate(['/registro']);
            }
          }
        ]
      });
      await alert.present();
    }
  }
}
