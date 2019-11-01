import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCompraComponent } from './carro-compra.component';

describe('CarroCompraComponent', () => {
  let component: CarroCompraComponent;
  let fixture: ComponentFixture<CarroCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
