import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  formularioLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    this.formularioLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
    });
  }
  enviarCorreo() {
    // Tu lógica para enviar el correo aquí
  }
  enviar(): void {
    if (this.formularioLogin.invalid) {
      this.mostrarAlerta('Error', 'Ingrese un correo válido');
      return;
    }

    // Aquí puedes agregar la lógica para enviar la información de recuperación de contraseña al correo
    const correo = this.formularioLogin.value.correo;

    // Simulación de envío de correo (reemplaza esto con tu lógica real)
    // En este ejemplo, mostramos una alerta para demostrar que se enviaría el correo.
    this.mostrarAlerta(
      'Correo Enviado',
      `Se ha enviado un correo a ${correo} con instrucciones para recuperar la contraseña.`
    );
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
