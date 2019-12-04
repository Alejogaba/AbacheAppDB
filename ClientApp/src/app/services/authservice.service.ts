import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Persona} from '../models/persona';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { __await } from 'tslib';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
    persona:Persona;
  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string, private toastr:ToastrService,
  private router:Router) { }
 login(user: string, password: string) {
     this.rellenar(user, password);
     setTimeout(() => {
      this.logear();
  }, 1000);
}

logear():Observable<void>{
  if(this.persona!=null){
    sessionStorage.setItem('id', JSON.stringify(this.persona.id));
    sessionStorage.setItem('user', this.persona.nombre);
    this.toastr.success("Inicio sesión como "+this.persona.nombre);
    this.router.navigate(['/lista-productos']);
    return null;
}else{
this.toastr.error("Usuario y/o contraseña incorrectos")
return null;
}
};

rellenar(user: string, password: string){
 this.validar(user,password).subscribe( t => this.persona = t);
 return null;
}
validar(username:string, password:string):Observable<Persona>{
    const url = `${this.baseUrl + 'api/Personas/autenticar?email='}${username}${'&password='}${password}`;
    return this.http.get<Persona>(url).pipe(
        tap(_ => this.log(`'Econtrado '${username}`)),
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
getUserId(): number {
  return parseInt(sessionStorage.getItem('id') != null ? sessionStorage.getItem('id'):'0');
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

