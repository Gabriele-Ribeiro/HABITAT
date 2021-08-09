import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCategoriaComponent } from './buscar-categoria.component';

describe('BuscarCategoriaComponent', () => {
  let component: BuscarCategoriaComponent;
  let fixture: ComponentFixture<BuscarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
