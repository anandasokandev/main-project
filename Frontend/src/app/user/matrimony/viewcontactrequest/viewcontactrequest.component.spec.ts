import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontactrequestComponent } from './viewcontactrequest.component';

describe('ViewcontactrequestComponent', () => {
  let component: ViewcontactrequestComponent;
  let fixture: ComponentFixture<ViewcontactrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcontactrequestComponent]
    });
    fixture = TestBed.createComponent(ViewcontactrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
