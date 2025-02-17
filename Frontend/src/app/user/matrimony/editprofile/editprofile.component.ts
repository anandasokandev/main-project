import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent {

  public user: any = {};
  first_name: string = '';
  userProfile: any[]=[]
  
    constructor(
      private db: DatabaseService,
      private router: Router,
      private fb: FormBuilder
    ) {}
  
    matrimonyForm: FormGroup = this.fb.group({
      maritalstatus: [''],
      caste: [''],
      mothertoungue: [''],
      height: [''],
      weight: [''],
      bodytype: [''],
      highesteducation: [''],
      occupation: [''],
      salary: [''],
      complexion: [''],
      religion: [''],
      loginid: [localStorage.getItem('loginid')],
    });
  
    ngOnInit(): void {
      const loginid = localStorage.getItem('loginid');
  
      this.db.fetchMatrimonyProfile(loginid).then((data: any) => {
        if (data.message === 'Profile Found') {
          this.userProfile = data;
          console.log(this.userProfile);
          
        }
      });
  
      console.log(loginid);
      if (loginid) {
        this.db.fetchUser(loginid).then((data: any) => {
          this.user = data;
        });
      }
    }
  
    createProfile() {
    }
}
