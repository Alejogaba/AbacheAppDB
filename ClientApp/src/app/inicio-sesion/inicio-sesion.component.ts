import { Component, OnInit } from '@angular/core';
import {PersonasDataService} from '../services/personas-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private personasservice:PersonasDataService, private location:Location) { }

  ngOnInit() {
  }
  Login(Username:string,Password:string,event:Event){
    event.preventDefault(); // Avoid default action for the submit button of the login form

    this.personasservice.login(Username, Password).subscribe(res => {
       console.log(res);
      },error => {console.error(error); },() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
