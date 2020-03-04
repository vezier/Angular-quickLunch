import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


import { PedidoService } from './pedido.service';
import { Pedido } from '../models/pedido.model';


@Component({
  selector: "app-pedido-add",
  templateUrl: '../pedido/add-pedido.component.html'
})
export class AddPedidoComponent implements OnInit {

  pedido:Pedido = new Pedido();
  constructor(private router:Router, private pedidoService:PedidoService) {}
  ngOnInit() {
  };
  Guardar(){
    console.log("GUARDAR ADD");
    console.log(this.pedido.fecha);
    this.pedidoService.addPedido(this.pedido)
    .subscribe(data=>{
      alert("Se agrego con exito!");
      this.router.navigate(['show-pedido']);
    })

  }


}
