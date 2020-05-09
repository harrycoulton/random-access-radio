import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFailedComponent } from './search-failed.component';

describe('SearchFailedComponent', () => {
  let component: SearchFailedComponent;
  let fixture: ComponentFixture<SearchFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
