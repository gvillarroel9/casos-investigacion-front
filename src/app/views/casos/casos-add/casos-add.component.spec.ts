import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosAddComponent } from './casos-add.component';

describe('CasosAddComponent', () => {
  let component: CasosAddComponent;
  let fixture: ComponentFixture<CasosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
