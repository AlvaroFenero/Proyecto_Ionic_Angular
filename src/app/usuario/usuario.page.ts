import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { HttpClientModule } from '@angular/common/http';
import { CursoService } from 'src/service/curso.service';
import { UserTypeService } from 'src/service/user-type.service';


@Injectable({ 
  providedIn: 'root' 
})

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class UsuarioPage implements OnInit {
  userInfoReceived: UserModel | undefined;
  cod_asignatura: string ='';
  clases: any[];
  tipoUsuarioNombre: string | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cursoService: CursoService) {
    this.clases = [];
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['userInfo'];
    console.log("userInfoReceived: ", this.userInfoReceived);
    this.convertirTipoUsuarioNombre();
   }
   navegarAClase() {
    this.router.navigate(['/listaclases']); // Ajusta la ruta según tu configuración
  }

  convertirTipoUsuarioNombre() {
    if (this.userInfoReceived) {
      const tipoUsuario = parseInt(this.userInfoReceived?.tipo_usuario, 10);
      if (!isNaN(tipoUsuario))
      if (tipoUsuario === 2) {
        this.tipoUsuarioNombre = 'ALUMNO';
        console.log("nombre alumno es ",this.tipoUsuarioNombre);
      } else {
        this.tipoUsuarioNombre = 'Otro'; // Otra opción de manejo
      }  
    }
  }

  capitalizeFirstLetter(text: string | undefined): string {
    if (text) {
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
    return ''; // En caso de que sea undefined
  }

  ngOnInit() {
    console.log("userInfoReceived en ngOnInit: ", this.userInfoReceived);

  }
}