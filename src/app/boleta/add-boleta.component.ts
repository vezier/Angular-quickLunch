import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BoletaService } from './boleta.service';
import { Boleta } from '../models/boleta.model';


@Component({
  selector: "app-boleta-add",
  templateUrl: '../boleta/add-boleta.component.html'
})
export class AddBoletaComponent implements OnInit {

  boleta:Boleta = new Boleta();
  constructor(private router:Router, private boletaService:BoletaService) {}
  ngOnInit() {
  };
  Guardar(){
    console.log("GUARDAR ADD");
    console.log(this.boleta.fecha);
    this.boletaService.addBoleta(this.boleta)
    .subscribe(data=>{
      alert("Se agrego con exito!");
      this.router.navigate(['show-boleta']);
    })

  }


}
