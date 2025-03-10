import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenddeclinedinterestComponent } from './senddeclinedinterest.component';

describe('SenddeclinedinterestComponent', () => {
  let component: SenddeclinedinterestComponent;
  let fixture: ComponentFixture<SenddeclinedinterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenddeclinedinterestComponent]
    });
    fixture = TestBed.createComponent(SenddeclinedinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
