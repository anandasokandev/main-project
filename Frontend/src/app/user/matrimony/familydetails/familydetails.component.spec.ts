import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilydetailsComponent } from './familydetails.component';

describe('FamilydetailsComponent', () => {
  let component: FamilydetailsComponent;
  let fixture: ComponentFixture<FamilydetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilydetailsComponent]
    });
    fixture = TestBed.createComponent(FamilydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
