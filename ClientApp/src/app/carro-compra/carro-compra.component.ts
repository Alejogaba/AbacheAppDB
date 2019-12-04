import { Component, OnInit } from '@angular/core';
import {Producto} from '../models/producto';
import{CarroDataService} from '../services/carro-data.service';
import{EncabezadoComponent} from '../encabezado/encabezado.component';
import { CarritoCompras } from '../models/carrito-compras';
import { concat, Observable } from 'rxjs'; // Note, concat from 'rxjs', is not the same as concat from 'rxjs/operators'
import {Factura} from '../models/factura';
import {FacturaDetalles} from '../models/factura-detalles';
import { FacturaDataService } from '../services/factura-data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.component.html',
  styleUrls: ['./carro-compra.component.css']
})
export class CarroCompraComponent implements OnInit {
productos:Producto[];
carros:CarritoCompras[];
factura:Factura;
cantidad_a_llevar:number;
stock:string;
total_general:number;
total_individual:number;
clase:string;
  constructor(private carroservice:CarroDataService, private encabezado:EncabezadoComponent,
    private facturaservice:FacturaDataService,private toastr:ToastrService,private router:Router) { }
  ngOnInit() {
    this.buscarproducto();
    this.buscarcarro();
    this.factura=new Factura;
   setTimeout(() => {
    this.factura.id_persona=+sessionStorage.getItem('id');;
    this.calcular_total_general()
}, 5000);
  }
  ejecutar_metodos(){
    this.definir_estado();
    this.calcular_total_individual();
    this.calcular_total_general();
  }
  crear_factura(){
    this.facturaservice.add(this.factura).subscribe( f  => {
      this.toastr.success('Se genero factura con id: '+f.id);
      this.toastr.info('Cargando factura...');
      setTimeout(() => {
        this.router.navigate(['/factura',f.id]);
    }, 3000); });
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
