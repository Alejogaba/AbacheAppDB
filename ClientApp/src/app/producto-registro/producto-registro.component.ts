import { Component, OnInit } from '@angular/core';
import {Producto} from '../models/producto';
import {ProductosDataService} from '../services/productos-data.service';
import {Categoria} from '../models/categoria';
import {CategoriasDataService} from '../services/categorias-data.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css']
})
export class ProductoRegistroComponent implements OnInit {

  constructor(private productodataservice: ProductosDataService,private toastr: ToastrService,
    private categoriadataservice: CategoriasDataService) { }
  producto:Producto;
  categoria:Categoria;
  categorias:Categoria[];
  ngOnInit() {
    this.producto=new Producto;
    this.categoria=new Categoria;
    this.getCategorias();
  }
  
  getCategorias() {
    this.categoriadataservice.get().subscribe(categorias => {
      return this.categorias = categorias;
    });
    }

  addproducto(): void {
    if (!this.producto) { return; }
    this.productodataservice.addProducto(this.producto)
      .subscribe( producto  => {
        this.toastr.success('Se agrego un nuevo producto con id: '+producto.id);
             });
  }
  addcategoria(): void {
    if (!this.categoria) { return; }
    this.categoriadataservice.addCategoria(this.categoria)
      .subscribe( categoria  => {
        this.toastr.success('Se agrego nueva categoria con id: '+categoria.id);
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

      this.productodataservice.uploadImage(this.selectedFile.file).subscribe(
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


