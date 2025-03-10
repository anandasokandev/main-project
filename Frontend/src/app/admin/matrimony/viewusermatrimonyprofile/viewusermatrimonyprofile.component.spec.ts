import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusermatrimonyprofileComponent } from './viewusermatrimonyprofile.component';

describe('ViewusermatrimonyprofileComponent', () => {
  let component: ViewusermatrimonyprofileComponent;
  let fixture: ComponentFixture<ViewusermatrimonyprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewusermatrimonyprofileComponent]
    });
    fixture = TestBed.createComponent(ViewusermatrimonyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
