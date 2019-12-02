import { Component, OnInit } from '@angular/core';
import {Producto} from '../models/producto';

@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.component.html',
  styleUrls: ['./carro-compra.component.css']
})
export class CarroCompraComponent implements OnInit {
productos:Producto[]=[{id:1,titulo:'mouse'
,descripcion:'',estilo_color:'',imagen:'',
precio:10000,cantidad:5,id_categoria:1},
{id:2,titulo:'teclado'
,descripcion:'',estilo_color:'',imagen:'',
precio:20000,cantidad:10,id_categoria:1}];
cantidad_a_llevar:number;
stock:string;
total_general:number;
total_individual:number;
clase:string;
  constructor() { }
  ngOnInit() {
    this.cantidad_a_llevar=7;
   this.ejecutar_metodos();
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
  
  
  calcular_total_general(){
    let suma:number=0;
    this.total_general=0;
this.productos.forEach(product => {
  suma=this.cantidad_a_llevar*product.precio;
  this.total_general=suma+suma;
});
  }
  calcular_total_individual(){
    this.total_individual=0;
    this.productos.forEach(product => {
      this.total_individual=this.cantidad_a_llevar*product.precio;
    });
  }
 
}
