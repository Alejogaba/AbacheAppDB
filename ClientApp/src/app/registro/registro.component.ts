import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona';
import {PersonasDataService} from '../services/personas-data.service';
import {Ciudad} from '../models/ciudad';
import {Departamento} from '../models/departamento';
import {CiudadDataService} from '../services/ciudad-data.service';
import {DepartamentoDataService} from '../services/departamento-data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
persona:Persona;
  constructor(private personadataservice:PersonasDataService,
    private ciudadservice:CiudadDataService,
    private departamentoservice:DepartamentoDataService,
    private toastr:ToastrService,
    private router:Router) { }
departamentos:Departamento[];
departament:Departamento;
ciudades:Ciudad[]
  ngOnInit() {
    this.persona= new Persona();
    this.persona.id_rol=1;
    this.getDepartamento();
  }
  getDepartamento() {
    this.departamentoservice.get().subscribe(dpto => {
      return this.departamentos = dpto;
    });
    }
    buscarciudad(id_ciudad:number){
        this.ciudadservice.buscar(id_ciudad).subscribe(ciudad => {
          return this.ciudades = ciudad;
        });
    }
  add(): void {
    if (!this.persona) { return; }
    this.personadataservice.addPersona(this.persona)
      .subscribe( task  => {
          this.toastr.success('Registro exitoso');
          this.router.navigate(['/lista-productos']);
             });
  }
}
