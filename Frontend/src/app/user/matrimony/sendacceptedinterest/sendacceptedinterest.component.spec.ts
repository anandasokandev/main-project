import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendacceptedinterestComponent } from './sendacceptedinterest.component';

describe('SendacceptedinterestComponent', () => {
  let component: SendacceptedinterestComponent;
  let fixture: ComponentFixture<SendacceptedinterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendacceptedinterestComponent]
    });
    fixture = TestBed.createComponent(SendacceptedinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
