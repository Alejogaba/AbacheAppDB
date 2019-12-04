import { Component, OnInit } from '@angular/core';
import {Factura} from '../models/factura';
import {FacturaDetalles} from '../models/factura-detalles';
import { FacturaDataService } from '../services/factura-data.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import{EncabezadoComponent} from '../encabezado/encabezado.component';

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

  ngOnInit() {
    this.getfactura();
    setTimeout(() => {
      this.buscardetalles(this.factura.id)
  }, 5000);
  }
  getfactura(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.facturaservice.getbyid(id)
      .subscribe(f => this.factura = f);
  }
  buscardetalles(id:number){
  
      this.facturaservice.buscarfacturadetalle(id).subscribe(fs => {
        return this.facturadetalles = fs;
      });
   
  }
}
