import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentjobComponent } from './view-currentjob.component';

describe('ViewCurrentjobComponent', () => {
  let component: ViewCurrentjobComponent;
  let fixture: ComponentFixture<ViewCurrentjobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCurrentjobComponent]
    });
    fixture = TestBed.createComponent(ViewCurrentjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
