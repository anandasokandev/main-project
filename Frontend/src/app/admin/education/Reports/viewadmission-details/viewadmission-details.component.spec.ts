import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadmissionDetailsComponent } from './viewadmission-details.component';

describe('ViewadmissionDetailsComponent', () => {
  let component: ViewadmissionDetailsComponent;
  let fixture: ComponentFixture<ViewadmissionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewadmissionDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewadmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
