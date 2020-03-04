import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quicklunch-ng-app';
  constructor(private router:Router){}
  ShowAllProds(){
    this.router.navigate(["show-producto"]);
  }
  AddNuevoProd(){
    this.router.navigate(["add-producto"]);
  }
  ShowAllCli(){
    this.router.navigate(["show-cliente"]);
  }
  AddNuevoCli(){
    this.router.navigate(["add-cliente"]);
  }
  ShowAllPedidos(){
    this.router.navigate(["show-pedido"]);
  }
  AddNuevoPedido(){
    this.router.navigate(["add-pedido"]);
  }
  ShowAllBoletas(){
    this.router.navigate(["show-boleta"]);
  }
  AddNuevaBoleta(){
    this.router.navigate(["add-boleta"]);
  }
}
