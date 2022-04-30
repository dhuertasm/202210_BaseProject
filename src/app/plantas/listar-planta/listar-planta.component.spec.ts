/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {faker} from '@faker-js/faker';

import { ListarPlantaComponent } from './listar-planta.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPlantaComponent ],
      imports: [HttpClientModule],
      providers: [PlantaService]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;

    component.plantas = [new Planta(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.word(8),
      faker.datatype.number(),
      faker.lorem.word(7),
      faker.lorem.sentence()
      ),
    new Planta(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.word(8),
      faker.datatype.number(),
      faker.lorem.word(7),
      faker.lorem.sentence()
      ),
    new Planta(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.word(8),
      faker.datatype.number(),
      faker.lorem.word(7),
      faker.lorem.sentence()
      )
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tabla debe tener 3 filas más el encabezado', () => {
    let filasTabla = debug.nativeElement.querySelectorAll('tr');
    expect(filasTabla.length).toBe(4);
  })
});
