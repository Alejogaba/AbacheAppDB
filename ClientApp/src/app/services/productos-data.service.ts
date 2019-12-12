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

  getbyname(nombre:string): Observable<Producto[]> {
    const url = `${this.baseUrl + 'api/product/buscar?nombre='}/${nombre}`;
    return this.http.get<Producto[]>(url).pipe(
      tap(_ =>this.log('Se consulta producto por nombre')), 
      catchError(this.handleError<Producto[]>('getbyname', [])));
  }
  buscar(term: string): Observable<Producto[]> {
    const url = `${this.baseUrl + 'api/product/buscar?nombre='}${term}`;
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Producto[]>(url).pipe(
      tap(_ => this.log(`Encontrado el producto "${term}"`)),
      catchError(this.handleError<Producto[]>('buscar', []))
    );
  }
  buscarcategoria(term: number): Observable<Producto[]> {
    const url = `${this.baseUrl + 'api/product/buscarcategoria?categoria='}${term}`;
    return this.http.get<Producto[]>(url).pipe(
      tap(_ => this.log(`Encontrado el producto "${term}"`)),
      catchError(this.handleError<Producto[]>('buscarcategoria', []))
    );
  }
 
    
    Upload(image: File,producto: Producto): Observable<Producto> {
      const formData = new FormData();

    formData.append('image', image);
      return this.http.post<Producto>(this.baseUrl+'api/product',producto, httpOptions).pipe(
        tap((newProducto: Producto) => this.log(`Se registro la informacion con el id=${newProducto.id}`)),
        catchError(this.handleError<Producto>('addProducto'))
        );
      } 
  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post(this.baseUrl + 'api/product', formData);
  }
  modificar(producto: Producto): Observable<any> {
    const url = `${this.baseUrl + 'api/product'}/${producto.id}`;
  return this.http.put(url, producto, httpOptions).pipe(
    tap(_ => this.log(`Se actualizo el producto con id=${producto.id}`)),
    catchError(this.handleError<any>('modificar'))
  );
}

addProducto(producto: Producto): Observable<Producto> {
    
  return this.http.post<Producto>(this.baseUrl+'api/product', producto, httpOptions).pipe(
    tap((newProducto: Producto) => this.log(`Se registro la informacion con el id=${newProducto.id}`)),
    catchError(this.handleError<Producto>('addProducto'))
    );
  }


  delete(producto: Producto | number): Observable<Producto> {
    const id = typeof producto === 'number' ? producto : producto.id;
    const url = `${this.baseUrl + 'api/producto'}/${id}`;
    return this.http.delete<Producto>(url, httpOptions).pipe(
      tap(_ => this.log(`Se elimino el producto con id=${id}`)),
      catchError(this.handleError<any>('delete'))
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
