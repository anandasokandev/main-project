import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedinterestComponent } from './declinedinterest.component';

describe('DeclinedinterestComponent', () => {
  let component: DeclinedinterestComponent;
  let fixture: ComponentFixture<DeclinedinterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclinedinterestComponent]
    });
    fixture = TestBed.createComponent(DeclinedinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
