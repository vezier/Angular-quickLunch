import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Boleta } from '../models/boleta.model';
import { BoletaService } from './boleta.service';

@Component({
  selector: "app-cliedit",
  templateUrl: '../boleta/edit-boleta.component.html'
})
export class EditBoletaComponent implements OnInit {


    boleta :Boleta = new Boleta();
    constructor(private router:Router, private boletaService:BoletaService) {}
    ngOnInit() {
        this.editar()
    }
    
    editar(){
      let id=localStorage.getItem("id");
      this.boletaService.getBoletaId(+id)
      .subscribe(data =>{
          this.boleta=data;
      })
    }
    ActualizarBoleta(boleta:Boleta){
      console.log(boleta.id_boleta);
      this.boletaService.updateBoleta(boleta)
      .subscribe(data =>{
        this.boleta=data
        alert("Se ha actualizado con exito")
        this.router.navigate(["show-boleta"])
      }
        
        )
    }


  }
