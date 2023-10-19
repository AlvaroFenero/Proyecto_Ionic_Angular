import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router correctamente
import { AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'correo': new FormControl("", [Validators.required, Validators.email]),
      'curso': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'confirmacionContraseña': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {

  }

  async guardar() {
    var f = this.formularioRegistro.value;
    
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Ingrese todos los campos correctamente',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
  
    var usuario = {
      correo: f.correo,
      nombre: f.nombre,
      curso: f.curso,
      contraseña: f.contraseña,
    }
  
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.router.navigate(['/login']);
  }
}
