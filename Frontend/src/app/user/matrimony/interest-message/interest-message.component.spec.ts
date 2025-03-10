import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestMessageComponent } from './interest-message.component';

describe('InterestMessageComponent', () => {
  let component: InterestMessageComponent;
  let fixture: ComponentFixture<InterestMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestMessageComponent]
    });
    fixture = TestBed.createComponent(InterestMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
