import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HifiComponent } from './hifi.component';

describe('HifiComponent', () => {
  let component: HifiComponent;
  let fixture: ComponentFixture<HifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
