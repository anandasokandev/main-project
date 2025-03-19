import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplicationreportsComponent } from './jobapplicationreports.component';

describe('JobapplicationreportsComponent', () => {
  let component: JobapplicationreportsComponent;
  let fixture: ComponentFixture<JobapplicationreportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobapplicationreportsComponent]
    });
    fixture = TestBed.createComponent(JobapplicationreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
