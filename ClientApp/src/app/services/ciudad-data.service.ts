import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Categoria} from '../models/categoria';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Etiqueta } from '../models/etiqueta';
import {Ciudad} from '../models/ciudad';
@Injectable({
  providedIn: 'root'
})
export class CiudadDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       
      console.error(error); 
        
      this.log(`${operation} Fallo: ${error.message}`);
       
      return of(result as T);
    };
  }
  buscar(term: number): Observable<Ciudad[]> {
    const url = `${this.baseUrl + 'api/Ciudad/buscar?dept='}${term}`;
    return this.http.get<Ciudad[]>(url).pipe(
      tap(_ => this.log(`Encontrado el producto "${term}"`)),
      catchError(this.handleError<Ciudad[]>('buscar', []))
    );
  }
  private log(message: string) {
    console.log(`${message}`);
   }
}
