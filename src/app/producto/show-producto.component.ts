import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Producto } from '../models/producto.model';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-prodshow',
  templateUrl: '../producto/show-producto.component.html',
  styles: []
})
export class ShowProductoComponent implements OnInit {

  productos:Producto[];

  constructor (private productoService:ProductoService, private router:Router){}

  ngOnInit() {
    this.productoService.getProductos()
    .subscribe( data => {
      this.productos = data;
      });
  };

  deleteProducto(producto: Producto): void {
    this.productoService.deteleProducto(producto)
      .subscribe( data => {
        this.productos = this.productos.filter(u => u !== producto);
        alert("Producto eliminado...");
      })
  };
  editarProducto(producto:Producto):void{
    localStorage.setItem("id",producto.idProductos.toString());
    this.router.navigate(['edit-producto']);
  }

}