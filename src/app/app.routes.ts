import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'mostrar',
    loadComponent: () => import('./mostrar/mostrar.page').then( m => m.MostrarPage)
  },
  {
    path: 'recuperar',
    loadComponent: () => import('./recuperar/recuperar.page').then( m => m.RecuperarPage)
  },
  {
    path: 'vista_profesor',
    loadComponent: () => import('./vista_profesor/vista_profesor.page').then( m => m.VistaProfesorPage)
  },
  {
    path: 'vista_alumno',
    loadComponent: () => import('./vista_alumno/vista_alumno.page').then( m => m.VistaAlumnoPage)
  },
  {
    path: 'vista_apoderado',
    loadComponent: () => import('./vista_apoderado/vista_apoderado.page').then( m => m.VistaApoderadoPage)
  },
];