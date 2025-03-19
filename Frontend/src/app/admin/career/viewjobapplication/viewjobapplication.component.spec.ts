import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjobapplicationComponent } from './viewjobapplication.component';

describe('ViewjobapplicationComponent', () => {
  let component: ViewjobapplicationComponent;
  let fixture: ComponentFixture<ViewjobapplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewjobapplicationComponent]
    });
    fixture = TestBed.createComponent(ViewjobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
