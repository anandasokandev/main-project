import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetjobconstraintsComponent } from './setjobconstraints.component';

describe('SetjobconstraintsComponent', () => {
  let component: SetjobconstraintsComponent;
  let fixture: ComponentFixture<SetjobconstraintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetjobconstraintsComponent]
    });
    fixture = TestBed.createComponent(SetjobconstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
