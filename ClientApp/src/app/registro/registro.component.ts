import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona';
import {PersonasDataService} from '../services/personas-data.service';
import {Ciudad} from '../models/ciudad';
import {Departamento} from '../models/departamento';
import {CiudadDataService} from '../services/ciudad-data.service';
import {DepartamentoDataService} from '../services/departamento-data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
persona:Persona;
password2:string;
passwordvalida:boolean;
registerForm: FormGroup;
submitted = false;
departamentos:Departamento[];
departament:Departamento;
ciudades:Ciudad[];
    constructor( private formBuilder: FormBuilder,private personadataservice:PersonasDataService,
    private ciudadservice:CiudadDataService,
    private departamentoservice:DepartamentoDataService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit() {
    this.passwordvalida=true;
    this.password2=null;
    this.persona= new Persona();
    this.ciudades= [];
    this.persona.id_rol=1;
    this.getDepartamento();
    this.registerForm = this.formBuilder.group({
      nombre:[this.persona.nombre, Validators.required],
      apellido:[this.persona.apellido, Validators.required],
      id: [this.persona.id, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]],
      direccion:[this.persona.direccion, Validators.required],
      telefono:[this.persona.telefono, Validators.required],
      email:[this.persona.email, Validators.required],
      password:[this.persona.password, Validators.required],
      password2:[this.password2, Validators.required],
      id_departamento:[this.persona.id_departamento, Validators.required],
      id_ciudad:[this.persona.id_ciudad, Validators.required]
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
  
        return;
    }
      this.add();
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
    validarcontrasena(){
      if (this.persona.password==this.password2) {
        this.passwordvalida= true;
      }else{
        this.passwordvalida= false;
      }
    }
  add(): void {
    if (!this.persona) { return; }
    this.personadataservice.addPersona(this.persona)
      .subscribe( task  => {
          this.toastr.success('Registro exitoso');
          this.router.navigate(['/inicio-sesion']);
             });
  }
}
