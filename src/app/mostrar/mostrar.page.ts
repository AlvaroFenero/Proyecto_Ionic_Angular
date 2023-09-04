import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
  standalone: true,
  imports: [IonicModule], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MostrarPage implements OnInit {
  usuario: any; // Cambiado el nombre a "usuario" para reflejar que contiene un solo usuario

  constructor() {
    const usuarioString = localStorage.getItem('usuario'); // Cambiado a "usuario"
    this.usuario = usuarioString ? JSON.parse(usuarioString) : null; // Cambiado a "usuario"
  }

  ngOnInit() {}
}

