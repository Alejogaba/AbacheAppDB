import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Etiqueta} from '../models/etiqueta';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
export const BASE_URL = new InjectionToken<string>('BASE_URL');
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class EtiquetaDataService {

  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }
  get(): Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>(this.baseUrl+"api/etiqueta").pipe(
      catchError(this.handleError<Etiqueta[]>('get', [])));
  }
  add(task: Etiqueta): Observable<Etiqueta> {
    return this.http.post<Etiqueta>(this.baseUrl+'api/etiqueta', task, httpOptions).pipe(
      tap((newProducto: Etiqueta) => this.log(`Se registro la informacion con el id=${newProducto.id}`)),
      catchError(this.handleError<Etiqueta>('add'))
      );
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
