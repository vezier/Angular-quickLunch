import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Cliente } from '../models/cliente.model';
import { ClienteService } from './cliente.service';

@Component({
  selector: "app-cliedit",
  templateUrl: '../cliente/edit-cliente.component.html'
})
export class EditClienteComponent implements OnInit {


    cliente:Cliente = new Cliente();
    constructor(private router:Router, private clienteService:ClienteService) {}
    ngOnInit() {
        this.editar()
    }
    
    editar(){
      let id=localStorage.getItem("id");
      this.clienteService.getClienteId(+id)
      .subscribe(data =>{
          this.cliente=data;
      })
    }
    ActualizarCli(cliente:Cliente){
      this.clienteService.updateCliente(cliente)
      .subscribe(data =>{
        this.cliente=data
        alert("Se ha actualizado con exito")
        this.router.navigate(["show-cliente"])
      }
        
        )
    }


  }
