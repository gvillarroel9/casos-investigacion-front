import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosEditComponent } from './casos-edit.component';

describe('CasosEditComponent', () => {
  let component: CasosEditComponent;
  let fixture: ComponentFixture<CasosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
