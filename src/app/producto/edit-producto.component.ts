import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Producto } from '../models/producto.model';
import { ProductoService } from '../producto/producto.service';

@Component({
  selector: "app-prodedit",
  templateUrl: '../producto/edit-producto.component.html'
})
export class EditProductoComponent implements OnInit {


    producto:Producto = new Producto();
    constructor(private router:Router, private productoService:ProductoService) {}
    ngOnInit() {
        this.editProducto()
    }
    
    editProducto(){
      let id=localStorage.getItem("id");
      this.productoService.getProductoId(+id)
      .subscribe(data =>{
          this.producto=data;
      })
    }
    ActualizarProd(producto1:Producto){
      this.productoService.updateProducto(producto1)
      .subscribe(data =>{
        this.producto=data
        alert("Se ha actualizado con exito")
        this.router.navigate(["show-producto"])
      }
        
        )
    }


  }
