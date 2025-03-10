import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-updatedisabilitydetails',
  templateUrl: './updatedisabilitydetails.component.html',
  styleUrls: ['./updatedisabilitydetails.component.scss']
})
export class UpdatedisabilitydetailsComponent {
  public disabilityCategory: any[] = [];
  public subCategory: any[] = [];
  public login_id = localStorage.getItem('loginid');
  user: any[] = [];

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
    this.fetchUser();
  }

  fetchDisabilityCategory() {
    this.db.fetchDisabilityCategory().then((data: any) => {
      this.disabilityCategory = data;
    });
  }

  fetchUser() {
    this.db.fetchUser(this.login_id).then((data: any) => {
      this.user = data;
      console.log(this.user);
      if (this.user.length > 0) {
        // Patch values from user data to the form
        this.disabilityForm.patchValue({
          disabilitycategory: this.user[0].disability_category,
          disabilitysubcategory: this.user[0].disability_sub_category,
          percent: this.user[0].percent
        });

        // Fetch subcategory based on the user's disability category
        this.fetchSubCategoryByCategoryId(this.user[0].disability_category);
      }
    });
  }

  // Fetch subcategories based on the selected category
  fetchSubCategoryClick() {
    const category_id = this.disabilityForm.value.disabilitycategory;
    if (category_id) {
      this.fetchSubCategoryByCategoryId(category_id);
    }
  }

  // Helper function to fetch subcategory by category ID
  fetchSubCategoryByCategoryId(category_id: string) {
    this.db.fetchDisabilitySubCategoryById(category_id).then((data: any) => {
      console.log(data);
      this.subCategory = data;

      const selectedSubCategory = this.user[0]?.disability_sub_category;
      if (selectedSubCategory) {
        this.disabilityForm.patchValue({
          disabilitysubcategory: selectedSubCategory
        });
      }
    });
  }
  
  onSubmit(){
    console.log(this.disabilityForm.value);
  }
}
