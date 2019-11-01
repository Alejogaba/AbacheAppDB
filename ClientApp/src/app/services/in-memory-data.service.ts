import { Injectable } from '@angular/core';
import {Producto} from '../models/producto';
import {Persona} from '../models/persona'
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements  InMemoryDbService  {

  createDb() {
    const productos = [
     {id: 1,titulo:'Teclado Hp',descripcion:'Teclado usb para computador marca Hp',
     tipo:'negro',precio:30000,imagen:'../../assets/images/teclado.png'},
     {id: 2,titulo:'Mouse Hp',descripcion:'Mouse usb para computador marca Hp',
     tipo:'negro',precio:25000,imagen:'../../assets/images/mouse.png'}
    ];
    const personas =[
      {id:0,email:'admin',password:'admin',tipo:'admin'}
    ];
    const categorias=[
    {id:0,nombre:'Computadores'},
    {id:1,nombre:'Celulares'},
    {id:2,nombre:'Audio y video'}
    ];
    return {productos,personas,categorias};
  }
  genId(productos: Producto[]): number {
    return productos.length > 0 ? Math.max(...productos.map(task => task.id)) + 1 : 0;
  }

}