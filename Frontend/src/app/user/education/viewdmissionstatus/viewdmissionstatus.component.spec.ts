import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdmissionstatusComponent } from './viewdmissionstatus.component';

describe('ViewdmissionstatusComponent', () => {
  let component: ViewdmissionstatusComponent;
  let fixture: ComponentFixture<ViewdmissionstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdmissionstatusComponent]
    });
    fixture = TestBed.createComponent(ViewdmissionstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
