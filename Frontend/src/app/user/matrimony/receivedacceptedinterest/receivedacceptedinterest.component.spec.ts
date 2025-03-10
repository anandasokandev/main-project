import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedacceptedinterestComponent } from './receivedacceptedinterest.component';

describe('ReceivedacceptedinterestComponent', () => {
  let component: ReceivedacceptedinterestComponent;
  let fixture: ComponentFixture<ReceivedacceptedinterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceivedacceptedinterestComponent]
    });
    fixture = TestBed.createComponent(ReceivedacceptedinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
