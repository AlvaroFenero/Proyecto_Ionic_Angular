import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
  standalone: true,
  imports: [IonicModule , RouterLink], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MostrarPage implements OnInit {
  usuario: any;

  constructor() {
    const usuarioString = localStorage.getItem('usuario'); 
    this.usuario = usuarioString ? JSON.parse(usuarioString) : null;
  }

  ngOnInit() {}
}

