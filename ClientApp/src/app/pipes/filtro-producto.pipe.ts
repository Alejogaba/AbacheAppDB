import { Pipe, PipeTransform } from '@angular/core';
import {Persona} from '../models/persona';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(personas: Persona[], searchText: string){
    if (searchText == null) return personas;
return personas.filter(personas =>
personas.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
||
personas.telefono.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
);}


}
