import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup; // Cambiado el nombre a formularioRegistro

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({ // Cambiado el nombre de la variable
      'nombre': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'confirmacionContraseña': new FormControl("", Validators.required), // Cambiado el nombre del control
    });
  }

  ngOnInit() {
    // Código de inicialización aquí
  }

   async guardar() {
    var f = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Ingrese todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    var usuario = {
      nombre: f.nombre,
      contraseña: f.contraseña,
  }
  localStorage.setItem('usuario', JSON.stringify(usuario));
}
}