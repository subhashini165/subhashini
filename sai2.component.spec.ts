import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sai2Component } from './sai2.component';

describe('Sai2Component', () => {
  let component: Sai2Component;
  let fixture: ComponentFixture<Sai2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sai2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
