import { Component, OnInit } from '@angular/core';
import{Producto} from '../models/producto';
import{ProductosDataService} from '../services/productos-data.service';
import{Persona} from '../models/persona';
import{PersonasDataService} from '../services/personas-data.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
productos:Producto[];
  constructor(private productoservice:ProductosDataService,
    private personaservice:PersonasDataService) { }

  ngOnInit() {
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
