import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-receiveddeclinedinterest',
  templateUrl: './receiveddeclinedinterest.component.html',
  styleUrls: ['./receiveddeclinedinterest.component.scss']
})
export class ReceiveddeclinedinterestComponent {
  constructor(private db: DatabaseService,private router:Router ){}
      
        public login_id = localStorage.getItem('loginid');
        public details: any[]=[];
      
        ngOnInit(): void {
          this.db.fetchreceiveddeclinedinterest(this.login_id).then((data: any)=>{
            console.log(data);
            this.details = data;
          })
        }

        viewProfile(login_id: any){
          this.router.navigate(['/user/matrimony/individualprofile'], {queryParams: {id: login_id}})
        }
}
