import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-createprofilematrimony',
  templateUrl: './createprofilematrimony.component.html',
  styleUrls: ['./createprofilematrimony.component.scss'],
})
export class CreateprofilematrimonyComponent {
  public user: any = {};
  first_name: string = '';

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
    age:'',
    loginid: [localStorage.getItem('loginid')],
  });

  ngOnInit(): void {
    const loginid = localStorage.getItem('loginid');

    this.db.fetchMatrimonyProfile(loginid).then((data: any) => {
      console.log(data.message);
      if(data.message === 'Profile Found'){
        this.router.navigate(['/user/matrimony/uploadimages'])
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
    console.log(this.matrimonyForm.value);
    this.db
      .createMatrimonyProfile(this.matrimonyForm.value)
      .then((data: any) => {
        if (data.message === 'Profile Created') {
          alert('Upload Photos');
          this.router.navigate(['/user/matrimony/uploadimages']);
        } else if(data.message === 'Failed') {
          alert('Failed');
        } else{
          alert('Profile already exists');
          this.router.navigate(['/user/dashboard']);
        }
      });
  }
}
