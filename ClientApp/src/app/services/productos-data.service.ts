import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Producto} from '../models/producto';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
import { InjectionToken } from '@angular/core';
export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class ProductosDataService {

  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }
  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl+'api/product').pipe(
      tap(_ =>this.log('Se consulta la informacion')), 
      catchError(this.handleError<Producto[]>('GetProducto', [])));
  }
  getbyid(id: number): Observable<Producto> {
    const url = `${this.baseUrl + 'api/product'}/${id}`;

    return this.http.get<Producto>(url).pipe(
      tap(_ => this.log(`fallo busqueda id=${id}`)),
      catchError(this.handleError<Producto>(`getbyid id=${id}`))
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
