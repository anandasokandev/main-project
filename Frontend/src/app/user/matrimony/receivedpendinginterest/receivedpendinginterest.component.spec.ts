import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedpendinginterestComponent } from './receivedpendinginterest.component';

describe('ReceivedpendinginterestComponent', () => {
  let component: ReceivedpendinginterestComponent;
  let fixture: ComponentFixture<ReceivedpendinginterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceivedpendinginterestComponent]
    });
    fixture = TestBed.createComponent(ReceivedpendinginterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
