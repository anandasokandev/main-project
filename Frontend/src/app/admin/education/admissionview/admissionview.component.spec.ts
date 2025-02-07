import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionviewComponent } from './admissionview.component';

describe('AdmissionviewComponent', () => {
  let component: AdmissionviewComponent;
  let fixture: ComponentFixture<AdmissionviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionviewComponent]
    });
    fixture = TestBed.createComponent(AdmissionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
