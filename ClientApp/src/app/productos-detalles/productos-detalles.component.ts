import { Component, OnInit, Input } from '@angular/core';
import{Producto} from '../models/producto';
import{ProductosDataService} from '../services/productos-data.service';
import{Persona} from '../models/persona';
import{PersonasDataService} from '../services/personas-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-detalles',
  templateUrl: './productos-detalles.component.html',
  styleUrls: ['./productos-detalles.component.css']
})
export class ProductosDetallesComponent implements OnInit {
  producto:Producto;
  productos:Producto[];
  constructor(private productoservice:ProductosDataService,
    private personaservice:PersonasDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductos();
  }
  getTodoslosProductos() {
    this.productoservice.get().subscribe(productos => {
      return this.productos = productos;
    });
    }
  getProductos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productoservice.getbyid(id)
      .subscribe(producto => this.producto = producto);
  }
    personas:Persona[];
    getPersonas() {
      this.personaservice.get().subscribe(personas => {
        return this.personas = personas;
      });
      }
}
