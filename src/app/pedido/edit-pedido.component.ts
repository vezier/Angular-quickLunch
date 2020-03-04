import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PedidoService } from './pedido.service';
import { Pedido } from '../models/pedido.model';

@Component({
  selector: "app-cliedit",
  templateUrl: '../pedido/edit-pedido.component.html'
})
export class EditPedidoComponent implements OnInit {


    pedido:Pedido = new Pedido();
    constructor(private router:Router, private pedidoService:PedidoService) {}
    ngOnInit() {
        this.editar()
    }
    
    editar(){
      let id=localStorage.getItem("id");
      this.pedidoService.getPedidoId(+id)
      .subscribe(data =>{
          this.pedido=data;
      })
    }
    ActualizarPedido(pedido:Pedido){
      console.log(pedido.id_pedido);
      this.pedidoService.updatePedido(pedido)
      .subscribe(data =>{
        this.pedido=data
        alert("Se ha actualizado con exito")
        this.router.navigate(["show-pedido"])
      }
        
        )
    }


  }
