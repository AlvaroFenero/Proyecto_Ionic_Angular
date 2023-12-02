import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { UserModel } from 'src/app/models/UserModel';


@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
   

    URL_SUPABASE = 'https://efxijvvxlfnfjjjugldg.supabase.co/rest/v1/'
    supabaseheaders = new HttpHeaders().set("apiKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmeGlqdnZ4bGZuZmpqanVnbGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODg3NjIsImV4cCI6MjAxMTI2NDc2Mn0.FVEgbY2cdX_mDcU1kL6xx-5NwAZhg4iBQzR0NpZ3oks")
  constructor(private _httpclient: HttpClient) { }
  getUser(email: string): Observable<UserModel> {
    return this._httpclient.get<UserModel>(this.URL_SUPABASE+'USUARIO?email=eq.'+email, { headers: this.supabaseheaders.set('Accept', 'application/vnd.pgrst.object+json'), responseType: 'json' });
}

  getUserType(tipo_usuario: number){
    return this._httpclient.get<any>(this.URL_SUPABASE+"USUARIO?tipo_usuario=eq."+tipo_usuario, { headers: this.supabaseheaders}).pipe(
        map((user) => {
            console.log(user[0].tipo_usuario);
            return user[0].tipo_usuario;
        }), catchError((err) => {
            console.log(err)
            return err;
      })
    );
  }
}
