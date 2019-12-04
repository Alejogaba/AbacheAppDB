import { Component, OnInit } from '@angular/core';
import {Producto} from '../models/producto';
import{CarroDataService} from '../services/carro-data.service';
import{EncabezadoComponent} from '../encabezado/encabezado.component';
import { CarritoCompras } from '../models/carrito-compras';
import { concat, Observable } from 'rxjs'; // Note, concat from 'rxjs', is not the same as concat from 'rxjs/operators'



@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.component.html',
  styleUrls: ['./carro-compra.component.css']
})
export class CarroCompraComponent implements OnInit {
productos:Producto[];
carros:CarritoCompras[];
cantidad_a_llevar:number;
stock:string;
total_general:number;
total_individual:number;
clase:string;
  constructor(private carroservice:CarroDataService, private encabezado:EncabezadoComponent) { }
  ngOnInit() {
    this.buscarproducto();
    this.buscarcarro();
   setTimeout(() => {
    this.calcular_total_general()
}, 5000);
  }
  ejecutar_metodos(){
    this.definir_estado();
    this.calcular_total_individual();
    this.calcular_total_general();
  }
  
  definir_estado(){
 
      if (this.cantidad_a_llevar<= 10){
        this.stock='En stock';
        this.clase='stock';
      }else{
        this.stock='No hay unidades disponibles';
        this.clase='nostock';
      }
 
  }
  buscarproducto(){
      this.carroservice.buscarproducto(this.encabezado.userid()).subscribe(productos => {
        return this.productos = productos;
      });
     
  }
  buscarcarro(){
    this.carroservice.buscarcarro(this.encabezado.userid()).subscribe(carros => {
      return this.carros = carros;
    });
    
  
}

  calcular_total_general():Observable<any>{
    let suma:number=0;
    this.total_general=0;
for (let index = 0; index < this.carros.length; index++) {
  const element = this.carros[index];
  this.total_general=this.total_general+element.total;
}
  

return null;
  }
  calcular_total_individual(){
    this.total_individual=0;
    this.productos.forEach(product => {
      this.total_individual=this.cantidad_a_llevar*product.precio;
    });
  }
 
}
