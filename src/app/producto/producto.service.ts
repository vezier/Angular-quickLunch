import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductoService {
  
  constructor(private http:HttpClient) {}
	private productoUrl = 'http://localhost:8080/api/producto';

  public getProductos() {
    return this.http.get<Producto[]>(this.productoUrl);
  }
  public getProductoId(id: number) {
    console.log("GET ID DEL PRODUCTO");
    return this.http.get<Producto>(this.productoUrl+ "/"+ id);
  }
  public updateProducto(producto:Producto){
    console.log("actualizar Service");
    return this.http.put<Producto>(this.productoUrl+"/"+producto.idProductos, producto);
  }

  public deteleProducto(producto:Producto) {
    return this.http.delete(this.productoUrl + "/"+ producto.idProductos);
  }

  public addProducto(producto:Producto) {
    console.log(producto.nombre);
    return this.http.post<Producto>(this.productoUrl, producto);
  }


}
