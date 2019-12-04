import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{Persona} from '../models/persona';
import{PersonasDataService} from '../services/personas-data.service';
import{Categoria} from '../models/categoria';
import{CategoriasDataService} from '../services/categorias-data.service';
import {Producto} from '../models/producto';
import {ProductosDataService} from '../services/productos-data.service';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from '../services/authservice.service';
import {CarroDataService} from '../services/carro-data.service';
import {CarritoCompras} from '../models/carrito-compras';



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
  category:Categoria;
  productos:Producto[];
  carros:CarritoCompras[];
  
  constructor(private personaservice:PersonasDataService,
   private categoriaservice:CategoriasDataService,
   private productoservice:ProductosDataService,
   private toastr:ToastrService,
   private authservice:AuthserviceService,
   private carroservice:CarroDataService) { }

  ngOnInit() {
    this.getCategoria;
    if(this.isAuthenticated){
  this.buscarcarro();
  setTimeout(() => {
    this.incrementCounter();
}, 4000);
    }
}
  seleccionar(producto: Producto) {
    this.seleccionado.emit(producto);
}
  getProductos() {
    this.productoservice.get().subscribe(productos => {
      return this.productos = productos;
    });
    }

    public isAuthenticated(): boolean
    {
        return this.authservice.isAuthenticated();
    }
  getCategoria() {
    this.categoriaservice.get().subscribe(c => {
      return this.categorias = c;
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
    buscarcategoria(categoria:number){
        this.productoservice.buscarcategoria(categoria).subscribe(productos => {
          return this.productos = productos;
        });
    }
    username(): string {
      return this.authservice.getUserName();
  }
  userid():number{
return this.authservice.getUserId();
  }
  logout(){
    this.authservice.logout();
  }
  buscarcarro(){
    this.carroservice.buscarcarro(this.userid()).subscribe(carros => {
      return this.carros = carros;
    });
}
  public incrementCounter() {
    this.currentCount=0;
for (let index = 0; index < this.carros.length; index++) {
  const element = this.carros[index];
  this.currentCount=this.currentCount+element.cantidad;
}
    }
  getAll() {
    this.personaservice.get().subscribe(personas => {
      return this.personas = personas;
    });
    }
}
