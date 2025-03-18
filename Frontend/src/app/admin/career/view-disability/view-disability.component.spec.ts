import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDisabilityComponent } from './view-disability.component';

describe('ViewDisabilityComponent', () => {
  let component: ViewDisabilityComponent;
  let fixture: ComponentFixture<ViewDisabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDisabilityComponent]
    });
    fixture = TestBed.createComponent(ViewDisabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
