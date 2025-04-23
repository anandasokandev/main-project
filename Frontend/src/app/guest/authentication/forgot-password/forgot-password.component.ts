import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {

  otpNotSend = true
  otpSent = false;
  serverOtp = ''; // store OTP from server
  otpVerified = false

  changePassword: FormGroup;
  passwordVisible: any;

  constructor(private db: DatabaseService, private fb: FormBuilder, private router: Router) {
    this.changePassword = this.fb.group({
      username: ['', Validators.required],
      otp: ['', Validators.required],
      confirmpassword: ['', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/)],
      password: ['',Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/)]
    });
  }

  sendOTP() {
    const username = this.changePassword.get('username')?.value;
    if (username) {
      this.db.fetchUserByUsername(username).then((data: any) => {
        console.log(data);
        if (data.message === 'OTP sent successfully') {
          this.serverOtp = data.otp;
          alert('OTP sent successfully');
          this.otpSent = true;
          this.otpNotSend = false;
        } else {
          alert('Error sending OTP. Kindly check your username.');
        }
      }).catch((err) => {
        console.error(err);
        alert('Server error. Try again later.');
      });
    } else {
      alert('Username must be valid and not empty.');
    }
  }

  verifyOTP() {
    const enteredOtp = this.changePassword.get('otp')?.value;
    if (enteredOtp && enteredOtp === this.serverOtp) {
      alert('OTP verified successfully!');
      this.otpSent = !this.otpSent
      this.otpVerified = ! this.otpVerified
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  }

  submitForm() {
    if (this.changePassword.valid) {
      console.log('Form Submitted:', this.changePassword.value);
    } else {
      console.log('Form is invalid');
    }
  }

  changePasswordMethod(){

    const username = this.changePassword.get('username')?.value;
    const newpassword = this.changePassword.get('password')?.value;
    if(this.changePassword.value.password === this.changePassword.value.confirmpassword){
      this.db.updateUserPassword({ newpassword:newpassword, username: username}).then((data: any)=>{
        if(data.message == 'Success'){
          alert('Password changed successfully');
          this.router.navigate(['/guest/login']);
        }else{
          alert('Failed to change password');
        }
      })
    }else{
      alert('Password must be matching or valid');
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
