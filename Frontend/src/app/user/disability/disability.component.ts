import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-disability',
  templateUrl: './disability.component.html',
  styleUrls: ['./disability.component.scss'],
})
export class DisabilityComponent {
  public disabilityCategory: any[] = [];
  public subCategory: any[] = [];

  constructor(
    private db: DatabaseService,
    private fb: FormBuilder
  ) {}

  disabilityForm = this.fb.group({
    disabilitycategory: [''],
    disabilitysubcategory: [''],
    percent: [''],
  });

  ngOnInit(): void {
    this.fetchDisabilityCategory();
  }

  fetchDisabilityCategory() {
    this.db.fetchDisabilityCategory().then((data: any) => {
      this.disabilityCategory = data;
    });
  }

  fetchSubCategory() {
    const category_id = this.disabilityForm.value.disabilitycategory;
    console.log(category_id);
    this.db.fetchDisabilitySubCategoryById(category_id).then((data: any) => {
      this.subCategory = data;
    });
    console.log(this.subCategory);
  }
}
