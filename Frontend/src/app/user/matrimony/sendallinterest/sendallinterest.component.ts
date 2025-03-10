import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-sendallinterest',
  templateUrl: './sendallinterest.component.html',
  styleUrls: ['./sendallinterest.component.scss']
})
export class SendallinterestComponent {
  constructor(private db: DatabaseService, private router: Router) {}
  
    public login_id = localStorage.getItem('loginid');
    public details: any[] = [];
  
    ngOnInit(): void {
      this.db.fetchsendinterestall(this.login_id).then((data: any) => {
        console.log(data);
        this.details = data;
      });
    }

    viewProfile(login_id: string){
      this.router.navigate(['/user/matrimony/individualprofile'],{ queryParams: {id: login_id}})
    }

    deleteInterest(login_id: string, interest_loginid: string){
      this.db.deleteInterest({login_id,interest_loginid}).then((data: any)=>{
        console.log(data);
        
        if(data.message === 'Success'){
          alert('Interest deleted successfully');
        }else{
          alert('Failed to delete interest');
        }
      })
    }
}
