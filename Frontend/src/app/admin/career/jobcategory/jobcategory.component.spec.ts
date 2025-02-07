import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcategoryComponent } from './jobcategory.component';

describe('JobcategoryComponent', () => {
  let component: JobcategoryComponent;
  let fixture: ComponentFixture<JobcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobcategoryComponent]
    });
    fixture = TestBed.createComponent(JobcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
