import { Component, OnInit } from '@angular/core';
import {Producto} from '../models/producto';
import {ProductosDataService} from '../services/productos-data.service';
import {Categoria} from '../models/categoria';
import {CategoriasDataService} from '../services/categorias-data.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {
producto:Producto;
  constructor(private route: ActivatedRoute,private location: Location,private productodataservice: ProductosDataService,private toastr: ToastrService,
    private categoriadataservice: CategoriasDataService) {}

  ngOnInit() {
    this.getProductos();
  }
  getProductos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productodataservice .getbyid(id)
      .subscribe(producto => this.producto = producto);
  }
  actualizar(): void {
    this.productodataservice.modificar(this.producto)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
