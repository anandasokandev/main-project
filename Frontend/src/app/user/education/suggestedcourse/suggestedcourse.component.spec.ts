import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedcourseComponent } from './suggestedcourse.component';

describe('SuggestedcourseComponent', () => {
  let component: SuggestedcourseComponent;
  let fixture: ComponentFixture<SuggestedcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestedcourseComponent]
    });
    fixture = TestBed.createComponent(SuggestedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
