import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodetailsComponent } from './biodetails.component';

describe('BiodetailsComponent', () => {
  let component: BiodetailsComponent;
  let fixture: ComponentFixture<BiodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiodetailsComponent]
    });
    fixture = TestBed.createComponent(BiodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
