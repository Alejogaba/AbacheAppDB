import { Component, OnInit } from '@angular/core';
import{FacturaDetalles} from '../models/factura-detalles';
import{FacturaDataService} from '../services/factura-data.service';

@Component({
  selector: 'app-historial-ventas',
  templateUrl: './historial-ventas.component.html',
  styleUrls: ['./historial-ventas.component.css']
})
export class HistorialVentasComponent implements OnInit {
  facturadetalles:FacturaDetalles[];
  constructor(private facturaservice:FacturaDataService) { }

  ngOnInit() {
    this.buscarfactura(parseInt(sessionStorage.getItem('id') != null ? sessionStorage.getItem('id'):'0'));
  }
  buscarfactura(vendedor:number){
    this.facturaservice.buscarhistorialvendedor(vendedor).subscribe(p => {
      return this.facturadetalles = p;
    });
  
}
}
