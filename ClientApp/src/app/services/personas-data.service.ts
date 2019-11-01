import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Persona} from '../models/persona';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Inject } from '@angular/core';
export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class PersonasDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private personasUrl = 'api/personas';
  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }
  get(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl+"api/personas").pipe(
      catchError(this.handleError<Persona[]>('get', [])));
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
