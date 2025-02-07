import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjobcategoryComponent } from './viewjobcategory.component';

describe('ViewjobcategoryComponent', () => {
  let component: ViewjobcategoryComponent;
  let fixture: ComponentFixture<ViewjobcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewjobcategoryComponent]
    });
    fixture = TestBed.createComponent(ViewjobcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
