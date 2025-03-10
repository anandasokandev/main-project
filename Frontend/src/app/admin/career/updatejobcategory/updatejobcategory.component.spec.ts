import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejobcategoryComponent } from './updatejobcategory.component';

describe('UpdatejobcategoryComponent', () => {
  let component: UpdatejobcategoryComponent;
  let fixture: ComponentFixture<UpdatejobcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatejobcategoryComponent]
    });
    fixture = TestBed.createComponent(UpdatejobcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
