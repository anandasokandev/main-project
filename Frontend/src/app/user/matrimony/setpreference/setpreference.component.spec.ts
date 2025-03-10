import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpreferenceComponent } from './setpreference.component';

describe('SetpreferenceComponent', () => {
  let component: SetpreferenceComponent;
  let fixture: ComponentFixture<SetpreferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetpreferenceComponent]
    });
    fixture = TestBed.createComponent(SetpreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
