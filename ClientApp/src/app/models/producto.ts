import{ IEtiquetas } from '../Interfaces/ietiquetas'
import {Categoria} from '../models/categoria';

export class Producto {
    id:number;
    titulo:string;
    descripcion:string;
    estilo_color:string;
    precio:number;
  inventario: number;
  id_vendedor:number;
}
