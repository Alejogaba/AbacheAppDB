import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CarritoCompras} from '../models/carrito-compras';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
import { InjectionToken } from '@angular/core';
import { Producto } from '../models/producto';
import {Persona} from '../models/persona';
import {Factura} from '../models/factura';
import {FacturaDetalles} from '../models/factura-detalles';
export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class FacturaDataService {

  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }
  
  add(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(this.baseUrl+'api/Factura', factura, httpOptions).pipe(
      tap((newfactura:Factura) => this.log(`Se registro la informacion con el id=${newfactura.id}`)),
      catchError(this.handleError<Factura>('add'))
      );
    }
  buscarfactura(term: number): Observable<Factura> {
      const url = `${this.baseUrl + 'api/Factura/getfactura?user='}${term}`;

      return this.http.get<Factura>(url).pipe(
        tap(_ => this.log(`Encontrado el producto "${term}"`)),
        catchError(this.handleError<Factura>('buscarfactura',null))
      );
    }
  
    buscarfacturadetalle(term: number): Observable<FacturaDetalles[]> {
      const url = `${this.baseUrl + 'api/Factura/getfacturadetalle?factura='}${term}`;

      return this.http.get<FacturaDetalles[]>(url).pipe(
        tap(_ => this.log(`Encontrado el producto "${term}"`)),
        catchError(this.handleError<FacturaDetalles[]>('buscarfacturadetalle', []))
      );
    }
    getbyid(id: number): Observable<Factura> {
      const url = `${this.baseUrl + 'api/Factura'}/${id}`;
  
      return this.http.get<Factura>(url).pipe(
        tap(_ => this.log(`Encontro id=${id}`)),
        catchError(this.handleError<Factura>(`getbyid id=${id}`))
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
