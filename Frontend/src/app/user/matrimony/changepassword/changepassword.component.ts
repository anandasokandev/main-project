import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {

  changePassword = new FormGroup({
    oldpassword: new FormControl('', [Validators.required]),
    newpassword: new FormControl('', [Validators.required])
  });
  login_id: any = ''

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.login_id = localStorage.getItem('loginid')
  }

  onSubmit() {
    if (this.changePassword.valid) {
      const { oldpassword, newpassword } = this.changePassword.value;

      this.db.fetchUser(
        this.login_id
      )
      .then((data: any) => {
        console.log(data);
        
        if(data && data[0].password){
          if(data[0].password === oldpassword){

            this.db.updatePassword({newpassword, login_id: this.login_id}).then((data: any)=>{
              console.log(data);
              if(data.message === 'Success'){
                alert('Password changed successfully');
              }else{
                alert('Password change failed');
              }
            })
          }
        }
        
        this.changePassword.reset(); // clear form
      }).catch((error: any) => {
        // Handle errors here:
        console.error('Error updating password:', error);
        alert('Failed to change password. Please try again.');
      });
    } else {
      alert('Please fill in all fields.');
    }
  }
}
