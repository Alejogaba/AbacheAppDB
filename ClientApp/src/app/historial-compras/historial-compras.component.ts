import { Component, OnInit } from '@angular/core';
import{FacturaDetalles} from '../models/factura-detalles';
import{FacturaDataService} from '../services/factura-data.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {
facturadetalles:FacturaDetalles[];
  constructor(private facturaservice:FacturaDataService) { }

  ngOnInit() {
    this.buscarfactura(parseInt(sessionStorage.getItem('id') != null ? sessionStorage.getItem('id'):'0'));
  }
  buscarfactura(cliente:number){
      this.facturaservice.buscarhistorialcliente(cliente).subscribe(p => {
        return this.facturadetalles = p;
      });
    
  }

}
