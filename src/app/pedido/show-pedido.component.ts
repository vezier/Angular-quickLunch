import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../models/cliente.model';
import { PedidoService } from './pedido.service';
import { Pedido } from '../models/pedido.model';

@Component({
  selector: 'app-pedido',
  templateUrl: '../pedido/show-pedido.component.html',
  styles: []
})
export class ShowPedidoComponent implements OnInit {

  pedidos:Pedido[];

  constructor (private pedidoService:PedidoService, private router:Router){}

  ngOnInit() {
    this.pedidoService.getPedidos()
    .subscribe( data => {
      this.pedidos = data;
      //console.log(this.pedidos[1]);
      });
      
  };

  deletePedido(pedido:Pedido): void {
    this.pedidoService.deletePedido(pedido)
      .subscribe( data => {
        this.pedidos = this.pedidos.filter(u => u !==pedido);
        alert("Producto eliminado...");
      })
  };
  editarPedido(pedido:Pedido):void{
    console.log(pedido.id_pedido);
    localStorage.setItem("id",pedido.id_pedido.toString());
    this.router.navigate(['edit-pedido']);
  }

}