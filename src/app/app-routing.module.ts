import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowProductoComponent } from './producto/show-producto.component';
import { AddProductoComponent } from './producto/add-producto.component';
import { EditProductoComponent } from './producto/edit-producto.component';
import { ShowClienteComponent } from './cliente/show-cliente.component';
import { AddClienteComponent } from './cliente/add-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente.component';
import { ShowPedidoComponent } from './pedido/show-pedido.component';
import { AddPedidoComponent } from './pedido/add-pedido.component';
import { EditPedidoComponent } from './pedido/edit-pedido.component';
import { ShowBoletaComponent } from './boleta/show-boleta.component';
import { AddBoletaComponent } from './boleta/add-boleta.component';
import { EditBoletaComponent } from './boleta/edit-boleta.component';
const routes: Routes = [
  //Producto
  { path: 'show-producto', component: ShowProductoComponent },
  { path: 'add-producto', component: AddProductoComponent },
  { path: 'edit-producto', component: EditProductoComponent },
  //Cliente
  { path: 'show-cliente', component: ShowClienteComponent },
  { path: 'add-cliente', component: AddClienteComponent },
  { path: 'edit-cliente', component: EditClienteComponent },
  //pedido
  { path: 'show-pedido', component: ShowPedidoComponent },
  { path: 'add-pedido', component: AddPedidoComponent },
  { path: 'edit-pedido', component: EditPedidoComponent },
  //boleta
  { path: 'show-boleta', component: ShowBoletaComponent },
  { path: 'add-boleta', component: AddBoletaComponent },
  { path: 'edit-boleta', component: EditBoletaComponent }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
