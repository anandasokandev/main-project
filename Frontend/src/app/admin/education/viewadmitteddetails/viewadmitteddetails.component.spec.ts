import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadmitteddetailsComponent } from './viewadmitteddetails.component';

describe('ViewadmitteddetailsComponent', () => {
  let component: ViewadmitteddetailsComponent;
  let fixture: ComponentFixture<ViewadmitteddetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewadmitteddetailsComponent]
    });
    fixture = TestBed.createComponent(ViewadmitteddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
