import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindmatchingprofileComponent } from './findmatchingprofile.component';

describe('FindmatchingprofileComponent', () => {
  let component: FindmatchingprofileComponent;
  let fixture: ComponentFixture<FindmatchingprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindmatchingprofileComponent]
    });
    fixture = TestBed.createComponent(FindmatchingprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
