import { Component, OnInit } from '@angular/core';
import{Producto} from '../models/producto';
import{ProductosDataService} from '../services/productos-data.service'
import{Persona} from '../models/persona';
import{PersonasDataService} from '../services/personas-data.service';
import{EncabezadoComponent} from '../encabezado/encabezado.component';
import { CategoriasDataService } from '../services/categorias-data.service';
import { Categoria } from '../models/categoria';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {


  productos:Producto[];
  categorias:Categoria[];
  
  constructor(private productoservice:ProductosDataService,
    private personaservice:PersonasDataService,
    public encabezado:EncabezadoComponent,
    private categoriaservice:CategoriasDataService) { }

  ngOnInit() {
    
    this.encabezado.getProductos();
    this.getCategoria();
    this.getProductos();
  }
  getCategoria() {
    this.categoriaservice.get().subscribe(c => {
      return this.categorias = c;
    });
    }
    buscarcategoria(categoria:number){
      this.productos=[];
      this.productoservice.buscarcategoria(categoria).subscribe(productos => {
        return this.productos = productos;
      });
  }
  getProductos() {
    this.productoservice.get().subscribe(productos => {
      return this.productos = productos;
    });
    }
    personas:Persona[];


  getPersonas() {
    this.personaservice.get().subscribe(personas => {
      return this.personas = personas;
    });
    }
}
