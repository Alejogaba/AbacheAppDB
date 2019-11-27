import { Component, OnInit } from '@angular/core';
import {PersonasDataService} from '../services/personas-data.service';
import { Location } from '@angular/common';
import{Persona} from '../models/persona';
import{AuthserviceService} from '../services/authservice.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private personasservice:PersonasDataService, private location:Location, private autenticacion:AuthserviceService) { }

  ngOnInit() {
  }
  Login(Username:string,Password:string){
    this.autenticacion.login(Username, Password);
  }

  goBack(): void {
    this.location.back();
  }

}
