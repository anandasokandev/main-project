import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewmatrimonyprofile',
  templateUrl: './viewmatrimonyprofile.component.html',
  styleUrls: ['./viewmatrimonyprofile.component.scss']
})
export class ViewmatrimonyprofileComponent {


  constructor(private db: DatabaseService, private router: Router){}
  age: string = '';
  gender: string = '';
  religion: string = '';
  location: string = '';
  user: any[]=[]
  

  fetchProfile(){

    this.user = [];

    const profileParams = {
      age: this.age,
      gender: this.gender,
      religion: this.religion,
      location: this.location
    };

    console.log(profileParams);
    this.db.fetchMatrimonyProfileAll(profileParams).then((data: any)=>{
      if(data.length > 0){
        this.user = data;
        console.log(data);
        
      }
    })
  }

  viewProfile(login_id: string){
    this.router.navigate(['/admin/matrimony/viewindividualprofile'], {queryParams:{ id: login_id}});
  }
}
