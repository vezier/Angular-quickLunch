import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boleta } from '../models/boleta.model';
import { BoletaService } from './boleta.service';

@Component({
  selector: 'app-boleta-show',
  templateUrl: '../boleta/show-boleta.component.html',
  styles: []
})
export class ShowBoletaComponent implements OnInit {

  boletas:Boleta[];

  constructor (private boletaService:BoletaService, private router:Router){}

  ngOnInit() {
    this.boletaService.getBoletas()
    .subscribe( data => {
      this.boletas = data;
      });
      
  };

  deleteBoleta(boleta:Boleta): void {
    this.boletaService.deleteBoleta(boleta)
      .subscribe( data => {
        this.boletas = this.boletas.filter(u => u !==boleta);
        alert("Producto eliminado...");
      })
  };
  editarBoleta(boleta:Boleta):void{
    console.log(boleta.id_boleta);
    localStorage.setItem("id",boleta.id_boleta.toString());
    this.router.navigate(['edit-boleta']);
  }

}