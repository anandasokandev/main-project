import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-view-careerhome',
  templateUrl: './view-careerhome.component.html',
  styleUrls: ['./view-careerhome.component.scss']
})
export class ViewCareerhomeComponent {
    id: string = ''
    user: any[]=[];
    profileStatus: boolean = true
  
    constructor(private db: DatabaseService, private route: ActivatedRoute){}
  
    ngOnInit(): void {
      this.route.queryParams.subscribe((data: any) => {
        this.id = data.id;
      });
  
      this.db.fetchUser(this.id).then((data: any)=>{
        this.user = data
        if(data[0].status === 'disabled'){
          this.profileStatus = !this.profileStatus;
        }
      })
    }

    disableUser(login_id: any){
      this.db.disableUser({login_id}).then((data:any)=>{
        if(data.message === 'Success'){
          alert('User disabled successfully');
          location.reload()
        }else{
          alert('Failed');
        }
      })
    }

    enableUser(login_id: any){
      this.db.enableUser({login_id}).then((data:any)=>{
        if(data.message === 'Success'){
          alert('User enabled successfully');
          location.reload();
        }else{
          alert('Failed');
        }
      })
    }
}
