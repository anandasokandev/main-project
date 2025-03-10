import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveddeclinedinterestComponent } from './receiveddeclinedinterest.component';

describe('ReceiveddeclinedinterestComponent', () => {
  let component: ReceiveddeclinedinterestComponent;
  let fixture: ComponentFixture<ReceiveddeclinedinterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveddeclinedinterestComponent]
    });
    fixture = TestBed.createComponent(ReceiveddeclinedinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
