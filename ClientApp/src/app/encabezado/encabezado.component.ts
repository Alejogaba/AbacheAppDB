import { Component, OnInit } from '@angular/core';
import{Persona} from '../models/persona';
import{PersonasDataService} from '../services/personas-data.service';
import{Categoria} from '../models/categoria';
import{CategoriasDataService} from '../services/categorias-data.service';
import {Producto} from '../models/producto';
import {ProductosDataService} from '../services/productos-data.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  personas:Persona[];
  categorias:Categoria[];
  productos:Producto[];
  
  constructor(private personaservice:PersonasDataService,
   private categoriaservice:CategoriasDataService,
   private productoservice:ProductosDataService) { }

  ngOnInit() {
  
  }
  getCategoria() {
    this.categoriaservice.get().subscribe(categorias => {
      return this.categorias = categorias;
    });
    }
    buscarproducto(producto:string){
      this.productoservice.getbyname(producto).subscribe(productos => {
        return productos = productos;
      });
    }
  getAll() {
    this.personaservice.get().subscribe(personas => {
      return this.personas = personas;
    });
    }
}
