import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMovimientoComponent } from './eliminar-movimiento.component';

describe('EliminarMovimientoComponent', () => {
  let component: EliminarMovimientoComponent;
  let fixture: ComponentFixture<EliminarMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMovimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
