import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public fetchUser = '';
  public user = 'Enter Username to check';
  public userAvailability = '';
  savestatus = false

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]], 
    password: ['', [Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/)]], 
  });

  constructor(
    private db: DatabaseService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const username = this.registerForm.get('username')?.value;
    
    if (username) {
      
      this.db
        .checkUsername(username)
        .then((data: any) => {
          if (data && data.message === 'Username already exists') {
            alert('Username already taken');
          } else {
            
            this.db
              .registerUser(this.registerForm.value)
              .then((data: any) => {
                this.fetchUser = data;

                if (data && data.message === 'User created successfully') {
                  alert('User created successfully');
                  this.router.navigate(['/guest/login']);
                } else {
                 
                  alert(
                    'Registration Failed: ' + (data?.message || 'Unknown error')
                  );
                }
              })
              .catch((error) => {
          
                console.error('Error during registration:', error);
                alert(
                  'An error occurred while registering. Please try again later.'
                );
              });
          }
        })
        .catch((error) => {
          console.error('Error checking username availability:', error);
          this.userAvailability = 'Error checking username availability';
        });
    }

  }
}
