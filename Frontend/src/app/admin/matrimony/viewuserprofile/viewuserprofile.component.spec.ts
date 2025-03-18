import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserprofileComponent } from './viewuserprofile.component';

describe('ViewuserprofileComponent', () => {
  let component: ViewuserprofileComponent;
  let fixture: ComponentFixture<ViewuserprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewuserprofileComponent]
    });
    fixture = TestBed.createComponent(ViewuserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
