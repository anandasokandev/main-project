import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditprofileComponent } from './view-editprofile.component';

describe('ViewEditprofileComponent', () => {
  let component: ViewEditprofileComponent;
  let fixture: ComponentFixture<ViewEditprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEditprofileComponent]
    });
    fixture = TestBed.createComponent(ViewEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
