import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubIrregularidadComponent } from './sub-irregularidad.component';

describe('SubIrregularidadComponent', () => {
  let component: SubIrregularidadComponent;
  let fixture: ComponentFixture<SubIrregularidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubIrregularidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubIrregularidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
