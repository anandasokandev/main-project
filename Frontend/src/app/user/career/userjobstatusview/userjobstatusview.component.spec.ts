import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserjobstatusviewComponent } from './userjobstatusview.component';

describe('UserjobstatusviewComponent', () => {
  let component: UserjobstatusviewComponent;
  let fixture: ComponentFixture<UserjobstatusviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserjobstatusviewComponent]
    });
    fixture = TestBed.createComponent(UserjobstatusviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
