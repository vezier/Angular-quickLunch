import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

//Componentes
import { AppComponent } from './app.component';
import { ShowProductoComponent } from './producto/show-producto.component';
import { AddProductoComponent} from './producto/add-producto.component';
import { EditProductoComponent} from './producto/edit-producto.component';
import { ShowClienteComponent } from './cliente/show-cliente.component';
import { AddClienteComponent} from './cliente/add-cliente.component';
import { EditClienteComponent} from './cliente/edit-cliente.component';
import { ShowPedidoComponent } from './pedido/show-pedido.component';
import { AddPedidoComponent } from './pedido/add-pedido.component';
import { EditPedidoComponent } from './pedido/edit-pedido.component';
import { ShowBoletaComponent } from './boleta/show-boleta.component';
import { AddBoletaComponent } from './boleta/add-boleta.component';
import { EditBoletaComponent } from './boleta/edit-boleta.component';
//Servicios
import { ProductoService} from './producto/producto.service';
import { ClienteService } from './cliente/cliente.service';
import { PedidoService } from './pedido/pedido.service';
import { BoletaService } from './boleta/boleta.service';
@NgModule({
  declarations: [
    AppComponent,
    ShowProductoComponent,
    AddProductoComponent,
    EditProductoComponent,
    ShowClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ShowPedidoComponent,
    AddPedidoComponent,
    EditPedidoComponent,
    ShowBoletaComponent,
    AddBoletaComponent,
    EditBoletaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService, ClienteService,PedidoService,BoletaService],
  bootstrap: [AppComponent]
})
export class AppModule { }