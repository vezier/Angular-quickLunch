import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from '../models/pedido.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PedidoService {
  
  constructor(private http:HttpClient) {}
	private pedidoUrl = 'http://localhost:8080/api/pedidos';

  public 'getPedidos'() {
    return this.http.get<Pedido[]>(this.pedidoUrl);
  }
  public getPedidoId(id: number) {
    console.log("GET ID DEL PRODUCTO");
    return this.http.get<Pedido>(this.pedidoUrl+ "/"+ id);
  }
  public updatePedido(pedido:Pedido){
    console.log("actualizar Service");
    return this.http.put<Pedido>(this.pedidoUrl+"/"+pedido.id_pedido, pedido);
  }

  public deletePedido(pedido:Pedido) {
    return this.http.delete(this.pedidoUrl + "/"+ pedido.id_pedido);
  }

  public addPedido(pedido:Pedido) {
    //console.log(cliente.idcategoriaCliente+" "+cliente.idcliente+" "+cliente.rut+" "+cliente.nombre+" ");
    return this.http.post<Pedido>(this.pedidoUrl, pedido);
  }


}
