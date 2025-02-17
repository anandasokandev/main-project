import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprofilematrimonyComponent } from './createprofilematrimony.component';

describe('CreateprofilematrimonyComponent', () => {
  let component: CreateprofilematrimonyComponent;
  let fixture: ComponentFixture<CreateprofilematrimonyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateprofilematrimonyComponent]
    });
    fixture = TestBed.createComponent(CreateprofilematrimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
