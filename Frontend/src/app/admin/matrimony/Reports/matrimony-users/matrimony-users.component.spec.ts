import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrimonyUsersComponent } from './matrimony-users.component';

describe('MatrimonyUsersComponent', () => {
  let component: MatrimonyUsersComponent;
  let fixture: ComponentFixture<MatrimonyUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatrimonyUsersComponent]
    });
    fixture = TestBed.createComponent(MatrimonyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
