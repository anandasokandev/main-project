import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadmissionprofileComponent } from './viewadmissionprofile.component';

describe('ViewadmissionprofileComponent', () => {
  let component: ViewadmissionprofileComponent;
  let fixture: ComponentFixture<ViewadmissionprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewadmissionprofileComponent]
    });
    fixture = TestBed.createComponent(ViewadmissionprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
