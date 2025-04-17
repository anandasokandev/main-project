import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginResponse: any = null;
  public fetchUserDetails: any = null;
  public login_id: any = '';
  public fetchUserCat: any = null;
  savestatus = false

  constructor(
    private db: DatabaseService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required]],
  });

  // The async onSubmit method to handle form submission
  async onSubmit() {
    if (this.loginForm.invalid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    console.log(this.loginForm.value);

    try {
      this.loginResponse = await this.db.login(this.loginForm.value);

      if (this.loginResponse && this.loginResponse.length > 0) {
        this.login_id = this.loginResponse[0].login_id;

        // Fetch user details and category asynchronously
        this.fetchUserDetails = await this.db.fetchUser(this.login_id);
        this.fetchUserCat = await this.db.fetchUserCategory(this.login_id);

        localStorage.setItem('loginid', this.loginResponse[0].login_id);
        localStorage.setItem('username', this.loginResponse[0].username);
        localStorage.setItem('role',this.loginResponse[0].role)

        if (
          this.loginResponse[0].role === 'user' &&
          this.loginResponse[0].status === 'approved'
        ) {
          if (this.fetchUserDetails.length > 0) {
            if (
              this.fetchUserCat.user_category ===
              null
            ) {
              this.router.navigate(['/user/usercategory']);
            } else {
              this.router.navigate(['/user/dashboard']);
            }
          } else {
            this.router.navigate(['/user/userprofilereg']);
          }
        } else if (
          this.loginResponse[0].role === 'user' &&
          this.loginResponse[0].status === 'pending'
        ) {
          alert('User profile not approved');
        } else {
          this.router.navigate(['/admin/dashboard']);
        }
      } else {
        alert('Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Error during login process:', error);
      alert('An error occurred while logging in, please try again later.');
    }
  }
}
