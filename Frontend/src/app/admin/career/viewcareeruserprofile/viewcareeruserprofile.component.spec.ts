import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcareeruserprofileComponent } from './viewcareeruserprofile.component';

describe('ViewcareeruserprofileComponent', () => {
  let component: ViewcareeruserprofileComponent;
  let fixture: ComponentFixture<ViewcareeruserprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcareeruserprofileComponent]
    });
    fixture = TestBed.createComponent(ViewcareeruserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
