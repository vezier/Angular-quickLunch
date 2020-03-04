import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from '../models/pedido.model';
import { Boleta } from '../models/boleta.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BoletaService {
  
  constructor(private http:HttpClient) {}
	private BoletaUrl = 'http://localhost:8080/api/boleta';

  public 'getBoletas'() {
    return this.http.get<Boleta[]>(this.BoletaUrl);
  }
  public getBoletaId(id: number) {
    console.log("GET ID DEL PRODUCTO");
    return this.http.get<Boleta>(this.BoletaUrl+ "/"+ id);
  }
  public updateBoleta(boleta:Boleta){
    console.log("actualizar Service");
    return this.http.put<Boleta>(this.BoletaUrl+"/"+boleta.id_boleta, boleta);
  }

  public deleteBoleta(boleta:Boleta) {
    return this.http.delete(this.BoletaUrl + "/"+ boleta.id_boleta);
  }

  public addBoleta(boleta:Boleta) {
    //console.log(cliente.idcategoriaCliente+" "+cliente.idcliente+" "+cliente.rut+" "+cliente.nombre+" ");
    return this.http.post<Boleta>(this.BoletaUrl, boleta);
  }


}
