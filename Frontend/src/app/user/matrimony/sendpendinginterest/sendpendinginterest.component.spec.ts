import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendpendinginterestComponent } from './sendpendinginterest.component';

describe('SendpendinginterestComponent', () => {
  let component: SendpendinginterestComponent;
  let fixture: ComponentFixture<SendpendinginterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendpendinginterestComponent]
    });
    fixture = TestBed.createComponent(SendpendinginterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
