import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-sendacceptedinterest',
  templateUrl: './sendacceptedinterest.component.html',
  styleUrls: ['./sendacceptedinterest.component.scss'],
})
export class SendacceptedinterestComponent {
  isModalOpen: boolean;
  constructor(private db: DatabaseService, private router: Router) {}

  public login_id = localStorage.getItem('loginid');
  public details: any[] = []
  interest_loginid :any = ''
  loading: boolean = false
  userDetails: any[]=[];
  
  ngOnInit(): void {
    this.db.fetchsendinterestaccepted(this.login_id).then((data: any) => {
      console.log(data);
      this.details = data;
      this.interest_loginid = data[0].interest_loginid
      this.db.fetchRequestContact(this.login_id,this.interest_loginid).then((response:any)=>{
        console.log(response);
        if(response.message === 'Success'){
          console.log(response);
          if(response.data[0].status === 'Yes'){
            this.loading = true
          }
        }
      })
    });
   
  }

  viewProfile(login_id: string){
    this.router.navigate(['/user/matrimony/individualprofile'],{ queryParams: {id: login_id}})
  }

  deleteInterest(login_id: string, interest_loginid: string){
    this.db.deleteInterest({login_id,interest_loginid}).then((data: any)=>{
      if(data.length > 0){
        alert('Interest deleted successfully');
      }else{
        alert('Failed to delete interest');
      }
    })
  }
  requestContact(login_id: any, interest_loginid: any){
   this.db.fetchRequestContact(login_id,interest_loginid).then((data:any)=>{
    if(data.message === 'Failed'){
      this.db.requestContact({login_id,interest_loginid}).then((data:any)=>{
        if(data.message === 'Success'){
          alert('Success');
        }else{
          alert('Failed');
        }
      })
    }else{
      alert('Request already exists');
    }
   })
  }

  viewContactDetails(interest_loginid: any): void {
    this.isModalOpen = true;
    this.db.fetchUser(interest_loginid).then((data:any)=>{
      this.userDetails = data;
    })
  }

  // Close the modal
  closeModal(): void {
    this.isModalOpen = false;
  }

}
