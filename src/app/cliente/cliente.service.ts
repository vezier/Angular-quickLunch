import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClienteService {
  
  constructor(private http:HttpClient) {}
	private clienteUrl = 'http://localhost:8080/api/cliente';

  public getClientes() {
    return this.http.get<Cliente[]>(this.clienteUrl);
  }
  public getClienteId(id: number) {
    console.log("GET ID DEL PRODUCTO");
    return this.http.get<Cliente>(this.clienteUrl+ "/"+ id);
  }
  public updateCliente(cliente:Cliente){
    console.log("actualizar Service");
    return this.http.put<Cliente>(this.clienteUrl+"/"+cliente.idcliente, cliente);
  }

  public deleteCliente(cliente:Cliente) {
    return this.http.delete(this.clienteUrl + "/"+ cliente.idcliente);
  }

  public addCliente(cliente:Cliente) {
    console.log(cliente.idcategoriaCliente+" "+cliente.idcliente+" "+cliente.rut+" "+cliente.nombre+" ");
    return this.http.post<Cliente>(this.clienteUrl, cliente);
  }


}
