import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink,ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
    // Código de inicialización aquí
  }
  ingresar() {
    // Lógica para procesar el inicio de sesión
    // Puedes implementar aquí lo que sucede cuando se hace clic en el botón de ingresar
  }
}


