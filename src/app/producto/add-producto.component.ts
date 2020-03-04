import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Producto } from '../models/producto.model';
import { ProductoService } from '../producto/producto.service';


@Component({
  selector: "app-prodadd",
  templateUrl: '../producto/add-producto.component.html'
})
export class AddProductoComponent implements OnInit {

  producto:Producto = new Producto();
  constructor(private router:Router, private productoService:ProductoService) {}
  ngOnInit() {
  };
  Guardar(){
    console.log("GUARDAR ADD");
    this.productoService.addProducto(this.producto)
    .subscribe(data=>{
      alert("Se agrego con exito!");
      this.router.navigate(['show-producto']);
    })

  }


}
