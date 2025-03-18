import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCareeruserComponent } from './view-careeruser.component';

describe('ViewCareeruserComponent', () => {
  let component: ViewCareeruserComponent;
  let fixture: ComponentFixture<ViewCareeruserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCareeruserComponent]
    });
    fixture = TestBed.createComponent(ViewCareeruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
