import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingJobComponent } from './matching-job.component';

describe('MatchingJobComponent', () => {
  let component: MatchingJobComponent;
  let fixture: ComponentFixture<MatchingJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchingJobComponent]
    });
    fixture = TestBed.createComponent(MatchingJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
