import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmatrimonyprofileComponent } from './viewmatrimonyprofile.component';

describe('ViewmatrimonyprofileComponent', () => {
  let component: ViewmatrimonyprofileComponent;
  let fixture: ComponentFixture<ViewmatrimonyprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmatrimonyprofileComponent]
    });
    fixture = TestBed.createComponent(ViewmatrimonyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
