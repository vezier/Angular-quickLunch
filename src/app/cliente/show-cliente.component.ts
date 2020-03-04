import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../models/cliente.model';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente-show',
  templateUrl: '../cliente/show-cliente.component.html',
  styles: []
})
export class ShowClienteComponent implements OnInit {

  clientes:Cliente[];

  constructor (private clienteService:ClienteService, private router:Router){}

  ngOnInit() {
    this.clienteService.getClientes()
    .subscribe( data => {
      this.clientes = data;
      });
  };

  deleteCliente(cliente:Cliente): void {
    this.clienteService.deleteCliente(cliente)
      .subscribe( data => {
        this.clientes = this.clientes.filter(u => u !== cliente);
        alert("Producto eliminado...");
      })
  };
  editarCliente(cliente:Cliente):void{
    localStorage.setItem("id",cliente.idcliente.toString());
    this.router.navigate(['edit-cliente']);
  }

}