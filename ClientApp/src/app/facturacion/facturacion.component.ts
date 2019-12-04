import { Component, OnInit } from '@angular/core';
import {Factura} from '../models/factura';
import {FacturaDetalles} from '../models/factura-detalles';
import { FacturaDataService } from '../services/factura-data.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import{EncabezadoComponent} from '../encabezado/encabezado.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  constructor(private facturaservice:FacturaDataService,
    private encabezado:EncabezadoComponent, private route: ActivatedRoute) { }
factura:Factura;
facturadetalles:FacturaDetalles[];
total_general:number;

  ngOnInit() {
    this.getfactura();
    setTimeout(() => {
      this.buscardetalles(this.factura.id)
  }, 2000);
  setTimeout(() => {
    this.calcular_total_general();
}, 5000);
  }
  getfactura(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.facturaservice.getbyid(id)
      .subscribe(f => this.factura = f);
  }
  calcular_total_general():Observable<any>{
    let suma:number=0;
    this.total_general=0;
for (let index = 0; index < this.facturadetalles.length; index++) {
  const element = this.facturadetalles[index];
  this.total_general=this.total_general+element.total_producto;
}
return null;
  }
  buscardetalles(id:number){
  
      this.facturaservice.buscarfacturadetalle(id).subscribe(fs => {
        return this.facturadetalles = fs;
      });
   
  }
}
