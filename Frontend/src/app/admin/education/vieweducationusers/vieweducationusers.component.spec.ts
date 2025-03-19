import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweducationusersComponent } from './vieweducationusers.component';

describe('VieweducationusersComponent', () => {
  let component: VieweducationusersComponent;
  let fixture: ComponentFixture<VieweducationusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VieweducationusersComponent]
    });
    fixture = TestBed.createComponent(VieweducationusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
