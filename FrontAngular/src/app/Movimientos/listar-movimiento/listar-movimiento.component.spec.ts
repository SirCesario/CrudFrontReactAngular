import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMovimientoComponent } from './listar-movimiento.component';

describe('ListarMovimientoComponent', () => {
  let component: ListarMovimientoComponent;
  let fixture: ComponentFixture<ListarMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMovimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
