import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
})
export class EditprofileComponent implements OnInit {
  public user: any = {};
  first_name: string = '';
  userProfile: any[] = [];
  matrimonyEditForm!: FormGroup;
  loginid : any = ''

  constructor(
    private db: DatabaseService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
     this.loginid = localStorage.getItem('loginid');
    
    // Initialize the form with validators
    this.matrimonyEditForm = this.fb.group({
      maritalstatus: ['', Validators.required],
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

    // Fetch matrimony profile
    if (this.loginid) {
      this.db.fetchMatrimonyProfile(this.loginid).then((data: any) => {
        if (data.message === 'Profile Found') {
          this.userProfile = data;
          
          this.matrimonyEditForm.patchValue({
            maritalstatus: data.data[0].marital_status,
            religion: data.data[0].religion,
            caste: data.data[0].caste, 
            mothertoungue: data.data[0].mother_toungue,
            height: data.data[0].height,
            weight: data.data[0].weight,
            bodytype: data.data[0].body_type,
            highesteducation: data.data[0].education,
            occupation: data.data[0].occupation,
            salary: data.data[0].income_range,
            complexion: data.data[0].complexion,
          });
        }
      }).catch((error: any) => {
        console.error('Error fetching matrimony profile', error);
      });
    }

    // Fetch user details
    if (this.loginid) {
      this.db.fetchUser(this.loginid).then((data: any) => {
        this.user = data;
      }).catch((error: any) => {
        console.error('Error fetching user details', error);
      });
    }
  }

  // Handle form submission
  editProfile(): void {
    console.log(this.matrimonyEditForm.value);
    this.db.editMatrimonyProfile(this.matrimonyEditForm.value).then((data: any)=>{
      if(data.message === 'Profile updated successfully'){
        alert(`${data.message}`);
      }else{
        alert(`${data.message}`);
      }
    })
  }
}
