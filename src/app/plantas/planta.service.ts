import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { mergeMap, Observable, of } from 'rxjs';
import { Planta } from './planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  apiUrl = "https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json";

constructor(private http: HttpClient ) { }


getPlantas(): Observable<Planta[]> {
  return this.http.get<Planta[]>(this.apiUrl);
}

getNumeroPlantasInteriorExterior(): Observable<number[]> {
  return this.getPlantas().pipe(mergeMap(plantas => {
     let numeroEI: Array<number> = [];
     let interior = 0;
     let exterior = 0;
     for (let i = 0; i < plantas.length; i++) {
       if (plantas[i].tipo === 'Interior') {
         interior++;
       } else {
         exterior++;
       }

     }
     return of([interior,exterior])
     })
  )

}



}
