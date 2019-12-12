import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Persona} from '../models/persona';
import { Observable, of, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class PersonasDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private personasUrl = 'api/personas';
  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string,private toastr:ToastrService) { }
  get(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl+"api/personas").pipe(
      catchError(this.handleError<Persona[]>('get', [])));
  }
  addPersona(task: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl+'api/personas', task, httpOptions).pipe(
      tap((newProducto: Persona) => this.log(`Se registro la informacion con el id=${newProducto.id}`)),
      catchError(this.myhandleError)
      );
    }
    modificar(persona: Persona): Observable<any> {
      const url = `${this.baseUrl + 'api/personas'}/${persona.id}`;
    return this.http.put(url, persona, httpOptions).pipe(
      tap(_ => this.log(`Se actualizo usuario con id=${persona.id}`)),
      catchError(this.myhandleError)
    );
    }
    getbyid(id: number): Observable<Persona> {
      const url = `${this.baseUrl + 'api/personas'}/${id}`;
  
      return this.http.get<Persona>(url).pipe(
        tap(_ => this.log(`se encontro id=${id}`)),
        catchError(this.myhandleError)
      );
      
    }
    login(username:string, password:string) {
      return this.http.post(this.baseUrl+'api/personas', {
        email: username,password: password,}).pipe(
          catchError(this.handleError<Persona[]>('login', [])));     
    }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       
      console.error(error); 
        
      this.log(`${operation} Fallo: ${error.message}`);
       
      return of(result as T);
    };
  }
  myhandleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    if (error.status == "500") {
      errorMessage = `Error: Ya hay un usuario registrado con ese correo y/o identificacion`;
  }
    if (error.status == "400") {
        errorMessage = `Error: datos invalidos`;
    }
    this.toastr.error(errorMessage);
    return throwError(errorMessage);
  }


public log(message: string) {
    console.log(message);
}

private mostrarError500(error: any): void {
    console.error(error);
}

mostrarError400(errorMessage){
    window.alert('no existe');
    return throwError(errorMessage);
}
}
