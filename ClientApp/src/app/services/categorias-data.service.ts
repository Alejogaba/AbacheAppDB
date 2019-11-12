import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Categoria} from '../models/categoria';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
export const BASE_URL = new InjectionToken<string>('BASE_URL');
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class CategoriasDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private categoriasUrl = 'api/categoria';
  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }
  get(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl+"api/categoria").pipe(
      catchError(this.handleError<Categoria[]>('get', [])));
  }
  addCategoria(task: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.baseUrl+'api/categoria', task, httpOptions).pipe(
      tap((newProducto: Categoria) => this.log(`Se registro la informacion con el id=${newProducto.id}`)),
      catchError(this.handleError<Categoria>('addCategoria'))
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
