import { Component, OnInit } from '@angular/core';
import{Producto} from '../models/producto';
import{ProductosDataService} from '../services/productos-data.service'
import{Persona} from '../models/persona';
import{PersonasDataService} from '../services/personas-data.service';
import{EncabezadoComponent} from '../encabezado/encabezado.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {


  productos:Producto[];
  constructor(private productoservice:ProductosDataService,
    private personaservice:PersonasDataService,
    public encabezado:EncabezadoComponent) { }

  ngOnInit() {
    this.encabezado.getProductos();
    this.getProductos();
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
