import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona';
import {PersonasDataService} from '../services/personas-data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
persona:Persona;
  constructor(private personadataservice:PersonasDataService) { }

  ngOnInit() {
    this.persona= new Persona();
  }
  add(): void {
    if (!this.persona) { return; }
    this.personadataservice.addPersona(this.persona)
      .subscribe( task  => {
          alert('Se registro exitosamente');
             });
  }
}
