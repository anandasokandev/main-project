import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {

  public userState: string = ''
  public formState: string = ''

  constructor(private db: DatabaseService){}

  ngOnInit(): void {
    const login_id = localStorage.getItem('loginid');

    //service to fetch user details
    this.db.fetchUser(login_id).then((data: any)=>{
      if(data.data[0].user_category === 'Career'){
        this.userState = data.data[0].user_category
      }
      if(data.data[0].user_category === 'Education'){
        this.userState = data.data[0].user_category
      }
      if(data.data[0].user_category === 'Matrimony'){
        this.userState = data.data[0].user_category
      }
    })

    //serice to fetch admission status to display on dashboard
    this.db.fetchAdmission(login_id).then((data: any)=>{
      if(data.message === 'Form Already Submitted'){
        this.formState = data.message
      }
    })


  }
}
