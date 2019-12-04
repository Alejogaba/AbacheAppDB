import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CarritoCompras} from '../models/carrito-compras';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
import { InjectionToken } from '@angular/core';
import { Producto } from '../models/producto';
import {Persona} from '../models/persona';
export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class CarroDataService {

  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl:string) { }
  addCarro(carro: CarritoCompras): Observable<CarritoCompras> {
    return this.http.post<CarritoCompras>(this.baseUrl+'api/Carro', carro, httpOptions).pipe(
      tap((newCarro:CarritoCompras) => this.log(`Se registro la informacion con el id=${newCarro.id}`)),
      catchError(this.handleError<CarritoCompras>('addCarro'))
      );
    }
  buscarproducto(term: number): Observable<Producto[]> {
      const url = `${this.baseUrl + 'api/Carro/buscar-producto?user='}${term}`;

      return this.http.get<Producto[]>(url).pipe(
        tap(_ => this.log(`Encontrado el producto "${term}"`)),
        catchError(this.handleError<Producto[]>('buscarproducto', []))
      );
    }
    buscarcarro(term: number): Observable<CarritoCompras[]> {
      const url = `${this.baseUrl + 'api/Carro/buscar-carro?user='}${term}`;

      return this.http.get<CarritoCompras[]>(url).pipe(
        tap(_ => this.log(`Encontrado el carro "${term}"`)),
        catchError(this.handleError<CarritoCompras[]>('buscarcarro', []))
      );
    }
    delete(producto: CarritoCompras | number): Observable<CarritoCompras> {
      const id = typeof producto === 'number' ? producto : producto.id;
      const url = `${this.baseUrl + 'api/Carro'}/${id}`;
      return this.http.delete<CarritoCompras>(url, httpOptions).pipe(
        tap(_ => this.log(`Se elimino el producto con id=${id}`)),
        catchError(this.handleError<any>('delete'))
      );
    }
    buscarusuario(term: number): Observable<Persona> {
      const url = `${this.baseUrl + 'api/Carro/buscar-persona?user='}${term}`;
      return this.http.get<Persona>(url).pipe(
        tap(_ => this.log(`Encontrado el usuario "${term}"`)),
        catchError(this.handleError<Persona>('buscarusuario', null))
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
