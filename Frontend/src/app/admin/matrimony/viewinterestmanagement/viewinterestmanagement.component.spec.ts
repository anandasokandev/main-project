import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinterestmanagementComponent } from './viewinterestmanagement.component';

describe('ViewinterestmanagementComponent', () => {
  let component: ViewinterestmanagementComponent;
  let fixture: ComponentFixture<ViewinterestmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewinterestmanagementComponent]
    });
    fixture = TestBed.createComponent(ViewinterestmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
