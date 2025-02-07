import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseselectionComponent } from './courseselection.component';

describe('CourseselectionComponent', () => {
  let component: CourseselectionComponent;
  let fixture: ComponentFixture<CourseselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseselectionComponent]
    });
    fixture = TestBed.createComponent(CourseselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
