import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {

  public userState: string = ''
  public formState: string = ''
  profileLoad: boolean = false;
  profile: boolean = false;

  constructor(private db: DatabaseService, private router: Router){}

  ngOnInit(): void {
    const login_id = localStorage.getItem('loginid');

    this.db.fetchMatrimonyProfile(login_id).then((data: any)=>{
      if(data.message === 'Profile Found'){
        if(data.data[0].photo_id != null ){
          this.profileLoad = !this.profileLoad;
          console.log(this.profile);
        }else{
          this.profile = !this.profile;
          console.log(this.profileLoad);
          
        }
      }else{
        this.profile = !this.profile;
      }
    })

    this.db.fetchUserCategory(login_id).then((data: any)=>{
      console.log(data.user_category);
      if(data.user_category === null){
        this.router.navigate(['/user/usercategory'])
      }
    })
  

    this.db.fetchUser(login_id).then((data: any)=>{
      
      if(data[0].user_category === 'Career'){
        this.userState = data[0].user_category
      }
      if(data[0].user_category === 'Education'){
        this.userState = data[0].user_category
      }
      if(data[0].user_category === 'Matrimony'){
        this.userState = data[0].user_category
      }
    })

   
    this.db.fetchAdmission(login_id).then((data: any)=>{
      if(data.message === 'Form Already Submitted'){
        this.formState = data.message
      }
    })


  }
}
