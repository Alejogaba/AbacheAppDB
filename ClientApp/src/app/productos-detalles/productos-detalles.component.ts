import { Component, OnInit, Input } from '@angular/core';
import{Producto} from '../models/producto';
import{ProductosDataService} from '../services/productos-data.service';
import{Persona} from '../models/persona';
import{PersonasDataService} from '../services/personas-data.service';
import {CarritoCompras} from '../models/carrito-compras';
import{CarroDataService} from '../services/carro-data.service';
import { ActivatedRoute } from '@angular/router';
import{EncabezadoComponent} from '../encabezado/encabezado.component';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-productos-detalles',
  templateUrl: './productos-detalles.component.html',
  styleUrls: ['./productos-detalles.component.css']
})
export class ProductosDetallesComponent implements OnInit {
  producto:Producto;
  productos:Producto[];
  carro_compras:CarritoCompras;
  rateControl: any;
  constructor(private productoservice:ProductosDataService,
    private personaservice:PersonasDataService,
    private route: ActivatedRoute,private encabezado:EncabezadoComponent,
    private carroservice:CarroDataService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.getProductos();
    this.carro_compras = new CarritoCompras();
    this.rateControl = new FormControl("1", [Validators.max(100), Validators.min(0)])
  }
  addcarro(): void {
    if (!this.producto) { return; }
    this.carro_compras.id_cliente = +sessionStorage.getItem('id');
    this.carro_compras.id_producto= +this.route.snapshot.paramMap.get('id');
    this.carroservice.addCarro(this.carro_compras)
      .subscribe( carro_compras  => {
        this.toastr.success('Se agrego al carrito de compras');
             });
    this.encabezado.incrementCounter();
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
