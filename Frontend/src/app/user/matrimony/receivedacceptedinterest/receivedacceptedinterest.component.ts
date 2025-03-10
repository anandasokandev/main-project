import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-receivedacceptedinterest',
  templateUrl: './receivedacceptedinterest.component.html',
  styleUrls: ['./receivedacceptedinterest.component.scss']
})
export class ReceivedacceptedinterestComponent {
  constructor(private db: DatabaseService,private router:Router ){}
    
      public login_id = localStorage.getItem('loginid');
      public details: any[]=[];
    
      ngOnInit(): void {
        this.db.fetchreceivedacceptedinterest(this.login_id).then((data: any)=>{
          console.log(data);
          this.details = data;
        })
      }

      viewProfile(login_id: any){
        this.router.navigate(['/user/matrimony/individualprofile'], {queryParams: {id: login_id}})
      }
}
