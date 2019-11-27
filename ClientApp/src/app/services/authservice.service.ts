import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Persona} from '../models/persona';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
    persona:Persona;
  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string, private toastr:ToastrService,
  private router:Router) { }
  async login(user: string, password: string) {
    //validar en el servidor si el usuario y password son válidos.
    //en el caso que sean válidos se deberian retornar los roles que tiene asociado dicho usuario
    //se podría encriptar el nombre de la variable
    await this.rellenar(user,password);
    if(this.persona!=null){
        sessionStorage.setItem('id', JSON.stringify(this.persona.id));
        sessionStorage.setItem('user', this.persona.nombre);
        this.toastr.success("Inicio sesión como "+this.persona.nombre);
        this.router.navigate(['/lista-productos']);
    }else{
    this.toastr.error("Usuario y/o contraseña incorrectos")
    }
}

async rellenar(user: string, password: string){
 this.validar(user,password).subscribe( t => this.persona = t);
}
validar(username:string, password:string):Observable<Persona>{
    const url = `${this.baseUrl + 'api/Personas/autenticar?email='}${username}${'&password='}${password}`;
    return this.http.get<Persona>(url).pipe(
        tap(_ => this.log(`'No encontrado'${username}`)),
        catchError(this.handleError<Persona>('validar'))
      );
    }
logout() {
    sessionStorage.clear();
    //this._router.navigate(['/login']);
}

isAuthenticated(): boolean {
    return sessionStorage.getItem('user')!=null;
}

hasRole(rol: string): boolean {
    if (!this.isAuthenticated()) return false;
    let roles: string[] = JSON.parse(sessionStorage.getItem('roles'));
    return roles.indexOf(rol) >= 0;
}

getUserName(): string {
    return sessionStorage.getItem('user') != null ? sessionStorage.getItem('user'):'Anonimo';
}

private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       
      console.error(error); 
        
      this.log(`${operation} Fallo: ${error.message}`);
       
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`${message}`);
   }
 
}

