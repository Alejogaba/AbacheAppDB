import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{Persona} from '../models/persona';
import{PersonasDataService} from '../services/personas-data.service';
import{Categoria} from '../models/categoria';
import{CategoriasDataService} from '../services/categorias-data.service';
import {Producto} from '../models/producto';
import {ProductosDataService} from '../services/productos-data.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

    searchText: string;
    @Output() seleccionado = new EventEmitter<Producto>();
    
  public currentCount = null;
  personas:Persona[];
  categorias:Categoria[];
  productos:Producto[];
  
  constructor(private personaservice:PersonasDataService,
   private categoriaservice:CategoriasDataService,
   private productoservice:ProductosDataService,
   private toastr:ToastrService) { }

  ngOnInit() {
  
  }
  seleccionar(producto: Producto) {
    this.seleccionado.emit(producto);
}
  getProductos() {
    this.productoservice.get().subscribe(productos => {
      return this.productos = productos;
    });
    }
  getCategoria() {
    this.categoriaservice.get().subscribe(categorias => {
      return this.categorias = categorias;
    });
    }
    buscarproducto(producto:string){
      if(producto==''){
      this.getProductos();
      }else{
        this.productoservice.buscar(producto).subscribe(productos => {
          return this.productos = productos;
        });
      }
    }
    public incrementCounter() {
      this.currentCount++;
      this.toastr.info("Se añadio al carrito");
    }
  getAll() {
    this.personaservice.get().subscribe(personas => {
      return this.personas = personas;
    });
    }
}
