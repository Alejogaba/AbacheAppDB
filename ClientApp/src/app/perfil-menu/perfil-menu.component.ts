import { Component, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';


@Component({
  selector: 'app-perfil-menu',
  templateUrl: './perfil-menu.component.html',
  styleUrls: ['./perfil-menu.component.css']
})
export class PerfilMenuComponent implements OnInit {

  constructor(private encabezado:EncabezadoComponent) { }

  ngOnInit() {
  }

}
