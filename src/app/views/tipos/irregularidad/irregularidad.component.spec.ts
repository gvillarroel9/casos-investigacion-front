import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrregularidadComponent } from './irregularidad.component';

describe('IrregularidadComponent', () => {
  let component: IrregularidadComponent;
  let fixture: ComponentFixture<IrregularidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrregularidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrregularidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
