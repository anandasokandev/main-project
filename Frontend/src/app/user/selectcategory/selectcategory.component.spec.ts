import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcategoryComponent } from './selectcategory.component';

describe('SelectcategoryComponent', () => {
  let component: SelectcategoryComponent;
  let fixture: ComponentFixture<SelectcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectcategoryComponent]
    });
    fixture = TestBed.createComponent(SelectcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
