import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup; // Cambiado el nombre a formularioRegistro

  constructor(public fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({ // Cambiado el nombre de la variable
      'nombre': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'confirmacionContraseña': new FormControl("", Validators.required), // Cambiado el nombre del control
    });
  }

  ngOnInit() {
    // Código de inicialización aquí
  }

  guardar() {
    // Lógica para guardar el registro
    // Puedes implementar aquí lo que sucede cuando se hace clic en el botón de registro
  }
}
