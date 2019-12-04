import { Component, OnInit } from '@angular/core';
import{FacturaDetalles} from '../models/factura-detalles';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {
facturadetalles:FacturaDetalles[];
  constructor() { }

  ngOnInit() {
  }

}
