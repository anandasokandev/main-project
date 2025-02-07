import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public fetchUser = '';
  public user = "Enter Username to check";
  public userAvailability = '';

  registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],   // Make username required and set a minimum length
      password: ['', [Validators.required, Validators.minLength(6)]],     // Ensure password is at least 6 characters
  });

  constructor(private db: DatabaseService, private fb: FormBuilder, private router: Router) {}

  // Function to check if the username is available
  checkUsernameAvailability() {
    const username = this.registerForm.get('username')?.value;
    if (username) {
      this.db.checkUsername(username).then((data: any) => {
        if (data && data.message === 'Username already exists') {
          this.userAvailability = 'Username already taken';
        } else {
          this.userAvailability = 'Username is available';
        }
      }).catch((error) => {
        console.error('Error checking username availability:', error);
        this.userAvailability = 'Error checking username availability';
      });
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    console.log(this.registerForm.value);

    // Call the database service to perform signup
    this.db.registerUser(this.registerForm.value).then((data: any) => {
      this.fetchUser = data;

      if (data && data.message === 'User created successfully') {
        // User created successfully, navigate to login page
        alert('User created successfully');
        this.router.navigate(['/login']);
      } else {
        // Registration failed
        alert('Registration Failed: ' + (data?.message || 'Unknown error'));
      }
    }).catch((error) => {
      // Handle any errors from the database service
      console.error('Error during registration:', error);
      alert('An error occurred while registering. Please try again later.');
    });
  }

}
