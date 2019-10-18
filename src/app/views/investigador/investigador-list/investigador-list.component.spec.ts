import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadorListComponent } from './investigador-list.component';

describe('InvestigadorListComponent', () => {
  let component: InvestigadorListComponent;
  let fixture: ComponentFixture<InvestigadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
