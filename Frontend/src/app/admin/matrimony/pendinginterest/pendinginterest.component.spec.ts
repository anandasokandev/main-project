import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendinginterestComponent } from './pendinginterest.component';

describe('PendinginterestComponent', () => {
  let component: PendinginterestComponent;
  let fixture: ComponentFixture<PendinginterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendinginterestComponent]
    });
    fixture = TestBed.createComponent(PendinginterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
