import{ IEtiquetas } from '../Interfaces/ietiquetas'

export class Producto {
    id:number;
    titulo:string;
    descripcion:string;
    estilo_color:string;
    precio:number;
  imagen: string;
  id_categoria: number;
  cantidad: number;
  id_etiqueta: number;
  id_proveedor: number;
}
