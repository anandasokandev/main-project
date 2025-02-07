import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private db: DatabaseService){}

  isSidebarHidden: boolean = false;
  userState: string = ''

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  ngOnInit(): void {

    //fetch login_id from localstorage
    const login_id = localStorage.getItem('loginid');
    
    //service to fetch user category
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
    
  }
}
