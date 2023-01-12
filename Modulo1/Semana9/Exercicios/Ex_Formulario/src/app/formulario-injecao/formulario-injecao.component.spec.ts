import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInjecaoComponent } from './formulario-injecao.component';

describe('FormularioInjecaoComponent', () => {
  let component: FormularioInjecaoComponent;
  let fixture: ComponentFixture<FormularioInjecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInjecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioInjecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
