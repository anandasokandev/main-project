import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCareerhomeComponent } from './view-careerhome.component';

describe('ViewCareerhomeComponent', () => {
  let component: ViewCareerhomeComponent;
  let fixture: ComponentFixture<ViewCareerhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCareerhomeComponent]
    });
    fixture = TestBed.createComponent(ViewCareerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
