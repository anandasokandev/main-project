import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedinterestComponent } from './acceptedinterest.component';

describe('AcceptedinterestComponent', () => {
  let component: AcceptedinterestComponent;
  let fixture: ComponentFixture<AcceptedinterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptedinterestComponent]
    });
    fixture = TestBed.createComponent(AcceptedinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
