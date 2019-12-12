import { Component, OnInit } from '@angular/core';
import {Producto} from '../models/producto';
import {ProductosDataService} from '../services/productos-data.service';
import {Categoria} from '../models/categoria';
import {CategoriasDataService} from '../services/categorias-data.service';

import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css']
})
export class ProductoRegistroComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
    constructor( private formBuilder: FormBuilder,private productodataservice: ProductosDataService,private toastr: ToastrService,
    private categoriadataservice: CategoriasDataService) { }
  producto:Producto;
  ncategoria:Categoria;
  id:number;
  categoria_producto:Categoria;
  categorias:Categoria[];
  ngOnInit() {
    this.producto=new Producto;
    setTimeout(() => {
      this.producto.id_vendedor=parseInt(sessionStorage.getItem('id') != null ? sessionStorage.getItem('id'):'0');
  }, 1000);
    this.ncategoria=new Categoria;
    this.categoria_producto = new Categoria;
    this.getCategorias();
    this.registerForm = this.formBuilder.group({
      titulo:[this.producto.titulo, Validators.required],
      precio: [this.producto.precio, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]],
      estilo_color:[this.producto.estilo_color, Validators.required],
      inventario: [this.producto.inventario, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]],
      descripcion:[this.producto.descripcion, Validators.required],
  });
    setTimeout(() => {
      this.producto.id_vendedor= parseInt(sessionStorage.getItem('id') != null ? sessionStorage.getItem('id'):'0');
  }, 3000);
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
      this.addproducto();
}

  buscarcategoria(id:number){
    this.categoriadataservice.getbyid(id)
    .subscribe(c => this.categoria_producto= c);
  }
  
  getCategorias() {
    this.categoriadataservice.get().subscribe(categorias => {
      this.categorias = categorias;
    });
    }

  addproducto(): void {
    if (!this.producto) { return; }

    this.productodataservice.addProducto(this.producto)
      .subscribe( producto  => {
        this.toastr.success('Se agrego un nuevo producto con id: '+producto.id);
             });
  }
  
  uploadf(): void {
    if (!this.producto) { return; }
    this.producto=this.imgURL;
    this.productodataservice.addProducto(this.producto)
      .subscribe( producto  => {
        this.toastr.success('Se agrego un nuevo producto con id: '+producto.id);
             });
  }
  

  addcategoria(): void {
    if (!this.ncategoria) { return; }
    this.categoriadataservice.addCategoria(this.ncategoria)
      .subscribe( categoria  => {
        this.toastr.success('Se agrego nueva categoria con id: '+categoria.id_categoria);
             });
             this.refresh();
  }
  refresh(): void {
    window.location.reload();
}

  selectedFile: ImageSnippet;
  imgURL:any;
  
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);


    });

    reader.readAsDataURL(file);
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}


