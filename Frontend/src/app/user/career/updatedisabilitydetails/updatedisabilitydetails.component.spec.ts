import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedisabilitydetailsComponent } from './updatedisabilitydetails.component';

describe('UpdatedisabilitydetailsComponent', () => {
  let component: UpdatedisabilitydetailsComponent;
  let fixture: ComponentFixture<UpdatedisabilitydetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedisabilitydetailsComponent]
    });
    fixture = TestBed.createComponent(UpdatedisabilitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
