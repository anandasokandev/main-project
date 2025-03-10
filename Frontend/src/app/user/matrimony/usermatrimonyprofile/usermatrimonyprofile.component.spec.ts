import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermatrimonyprofileComponent } from './usermatrimonyprofile.component';

describe('UsermatrimonyprofileComponent', () => {
  let component: UsermatrimonyprofileComponent;
  let fixture: ComponentFixture<UsermatrimonyprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermatrimonyprofileComponent]
    });
    fixture = TestBed.createComponent(UsermatrimonyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
