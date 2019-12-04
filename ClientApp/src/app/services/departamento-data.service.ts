import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Categoria} from '../models/categoria';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Etiqueta } from '../models/etiqueta';
import {Ciudad} from '../models/ciudad';
import{Departamento} from '../models/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }

  get(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.baseUrl+"api/Departamento").pipe(
      catchError(this.handleError<Departamento[]>('get', [])));
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
