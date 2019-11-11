import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona';
import {PersonasDataService} from '../services/personas-data.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
personas:Persona[];
  constructor(private personadataservice:PersonasDataService) { }

  ngOnInit() {
this.getPersonas();
  }
  getPersonas() {
    this.personadataservice.get().subscribe(personas => {
      return this.personas = personas;
    });
    }
}
