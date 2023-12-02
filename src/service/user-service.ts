import { Injectable } from "@angular/core";
import { UserModel } from '../models/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from "rxjs";



@Injectable({ 
  providedIn: 'root' 
})
export class UserService {
    

  URL_SUPABASE = 'https://efxijvvxlfnfjjjugldg.supabase.co/rest/v1/'

  constructor(private _httpclient: HttpClient) { }

  supabaseheaders = new HttpHeaders().set('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmeGlqdnZ4bGZuZmpqanVnbGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODg3NjIsImV4cCI6MjAxMTI2NDc2Mn0.FVEgbY2cdX_mDcU1kL6xx-5NwAZhg4iBQzR0NpZ3oks')

  getUserListSupaBase(): Observable<UserModel[]> {
      return this._httpclient.get<UserModel[]>(this.URL_SUPABASE, { headers: this.supabaseheaders, responseType: 'json' });
  }

  getUser(email: string): Observable<UserModel> {
      return this._httpclient.get<UserModel>(this.URL_SUPABASE+'USUARIO?email=eq.'+email, { headers: this.supabaseheaders.set('Accept', 'application/vnd.pgrst.object+json'), responseType: 'json' });
  }

  getLoginUser(email: string, contrasenha: string): Observable<UserModel> {
    return this._httpclient.get<UserModel>(this.URL_SUPABASE + 'USUARIO',{params: {
          select: '*,tipo_usuario', // Obtener todos los campos y tipo_usuario
          email: 'eq.' + email,
          contrasenha: 'eq.' + contrasenha,
        },
      headers: this.supabaseheaders.set('Accept', 'application/vnd.pgrst.object+json'),
      responseType: 'json',
    }
    );
  }
    
  
}