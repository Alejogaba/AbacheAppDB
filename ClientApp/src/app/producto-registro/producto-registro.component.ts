import { Component, OnInit } from '@angular/core';
import {Producto} from '../models/producto';
import {ProductosDataService} from '../services/productos-data.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css']
})
export class ProductoRegistroComponent implements OnInit {

  constructor(private productodataservice: ProductosDataService) { }
  producto:Producto;
  ngOnInit() {
    this.producto=new Producto;
    
  }
  
  add(): void {
    if (!this.producto) { return; }
    this.productodataservice.addProducto(this.producto)
      .subscribe( producto  => {
          alert('Se agrego un nuevo producto con id =>'+producto.id);
             });
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


