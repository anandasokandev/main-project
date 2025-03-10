import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualprofileComponent } from './individualprofile.component';

describe('IndividualprofileComponent', () => {
  let component: IndividualprofileComponent;
  let fixture: ComponentFixture<IndividualprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualprofileComponent]
    });
    fixture = TestBed.createComponent(IndividualprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
