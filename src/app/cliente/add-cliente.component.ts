import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


import { Cliente } from '../models/cliente.model';
import { ClienteService } from './cliente.service';


@Component({
  selector: "app-cliadd",
  templateUrl: '../cliente/add-cliente.component.html'
})
export class AddClienteComponent implements OnInit {

  cliente:Cliente = new Cliente();
  constructor(private router:Router, private clienteService:ClienteService) {}
  ngOnInit() {
  };
  Guardar(){
    console.log("GUARDAR ADD");
    this.clienteService.addCliente(this.cliente)
    .subscribe(data=>{
      alert("Se agrego con exito!");
      this.router.navigate(['show-cliente']);
    })

  }


}
