import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendallinterestComponent } from './sendallinterest.component';

describe('SendallinterestComponent', () => {
  let component: SendallinterestComponent;
  let fixture: ComponentFixture<SendallinterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendallinterestComponent]
    });
    fixture = TestBed.createComponent(SendallinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
