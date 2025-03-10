import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-selectcategory',
  templateUrl: './selectcategory.component.html',
  styleUrls: ['./selectcategory.component.scss']
})
export class SelectcategoryComponent {

  login_id = localStorage.getItem('loginid'); // Get login ID from localStorage
  public updateUserCat: any = null;

  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    
  }

  // async function to handle the category update
  async selectCategory(data: any) {
    try {
      // Prepare the object with user category and login_id
      const requestData = {
        login_id: this.login_id, // Pass the login_id
        user_category: data // Assuming `data` contains the new user category
      };

      this.updateUserCat = await this.db.updateUserCategory(requestData);
      

      if (this.updateUserCat.message === 'Success') {
        alert(`${data} Selected Successfully`)
        this.router.navigate(['/user/dashboard']);
      } else {
        alert('Category Updation Failed. Try Again');
      }

    } catch (error) {
      // Handle error (if any)
      console.error('Error updating category:', error);
      alert('Failed to update category. Please try again.');
    }
  }
}
