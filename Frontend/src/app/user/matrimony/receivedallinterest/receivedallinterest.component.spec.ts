import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedallinterestComponent } from './receivedallinterest.component';

describe('ReceivedallinterestComponent', () => {
  let component: ReceivedallinterestComponent;
  let fixture: ComponentFixture<ReceivedallinterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceivedallinterestComponent]
    });
    fixture = TestBed.createComponent(ReceivedallinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
