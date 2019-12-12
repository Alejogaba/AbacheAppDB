import { Pipe, PipeTransform } from '@angular/core';
import {Producto} from '../models/producto';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroClientePipe implements PipeTransform {

  transform(productos: Producto[], searchText: string){
    if (searchText == null) return productos;
return productos.filter(productos =>
productos.titulo.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
||
productos.descripcion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
);}

}
