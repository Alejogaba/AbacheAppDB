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
import{UsuariosDataService} from '../services/usuarios-data.service'

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  password2:string;
  persona:Persona;
  passwordvalida:boolean;
  registerForm: FormGroup;
  submitted = false;
  departamentos:Departamento[];
  departament:Departamento;
  ciudades:Ciudad[];
  constructor(public imageService: UsuariosDataService,
    private formBuilder: FormBuilder,private personadataservice:PersonasDataService,
    private ciudadservice:CiudadDataService,
    private departamentoservice:DepartamentoDataService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit() {
    this.passwordvalida=true;
    this.password2=null;
    this.getPersonas();
    this.ciudades= [];
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
  getPersonas(): void {
    const id =parseInt(sessionStorage.getItem('id') != null ? sessionStorage.getItem('id'):'0');
    this.personadataservice.getbyid(id)
      .subscribe(p => this.persona = p);
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
  
        return;
    }
      this.modificar();
}
modificar(): void {
  this.personadataservice.modificar(this.persona)
    .subscribe(() => this.toastr.success("Datos Actualizados"));
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
  selectedFile: ImageSnippet;
  imgURL:any;
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
        },(err) => {
        
        })
    });

    reader.readAsDataURL(file);
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}
