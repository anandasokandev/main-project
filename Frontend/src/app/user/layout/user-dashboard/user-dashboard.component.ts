import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent {
  public userState: string = '';
  public formState: string = '';
  profile: boolean = false;
  login_id = localStorage.getItem('loginid');
  jobStatus: boolean = false;
  educationApplication: boolean = false;

  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    const login_id = localStorage.getItem('loginid');

    this.db.fetchBioDetails(login_id).then((data: any) => {
      if (data.message === 'Not Found') {
        this.profile = !this.profile;
      }
    });

    this.db.fetchUserCategory(login_id).then((data: any) => {
      if (data.user_category === null) {
        this.router.navigate(['/user/usercategory']);
      }
    });

    this.db.fetchUser(login_id).then((data: any) => {
      if (data[0].user_category === 'Career') {
        this.userState = data[0].user_category;
      }
      if (data[0].user_category === 'Education') {
        this.userState = data[0].user_category;
      }
      if (data[0].user_category === 'Matrimony') {
        this.userState = data[0].user_category;
      }
    });


    this.db.fetchAdmission(login_id).then((data: any) => {
      console.log(data);
      
      if (data.message === 'Form not submitted yet') {
        this.educationApplication = true
      }else{
        this.educationApplication = false
      }
    });

    this.db.fetchSubmittedAnyJob(this.login_id).then((data: any)=>{
      if(data.message === 'Success'){
        this.jobStatus = !this.jobStatus;
      }
    })
    
  }
}
