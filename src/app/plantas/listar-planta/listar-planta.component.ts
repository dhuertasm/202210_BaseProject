import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css']
})
export class ListarPlantaComponent implements OnInit {

  plantas: Array<Planta> =  [];
  numeroPlantasInteriorExterior: Array<number> = [];

  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.getPlantas();
    this.getNumeroPlantasInteriorExterior();

  }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  getNumeroPlantasInteriorExterior(): void {
    this.plantaService.getNumeroPlantasInteriorExterior().subscribe(numeroPlantasInteriorExterior => {
      this.numeroPlantasInteriorExterior = numeroPlantasInteriorExterior;
    });
  }

}
