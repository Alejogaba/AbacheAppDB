import { Component, OnInit } from '@angular/core';
import{FacturaDetalles} from '../models/factura-detalles';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {
facturadetalles:FacturaDetalles[]=[{id:1,id_factura:1,titulo_producto:'mouse',cantidad_producto:1,
precio_producto:10000,estilo_color:'negro',total:10000,vendedor:'jose'}];
  constructor() { }

  ngOnInit() {
  }

}
