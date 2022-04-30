/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantaService } from './planta.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'

describe('Service: Planta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantaService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
