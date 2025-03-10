import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-receivedallinterest',
  templateUrl: './receivedallinterest.component.html',
  styleUrls: ['./receivedallinterest.component.scss']
})
export class ReceivedallinterestComponent {

  selectedMessage: string = '';
  name: string = '';
  user_id = localStorage.getItem('loginid');
  interest_id: string = ''

  constructor(private db: DatabaseService,private router:Router ){}

  public login_id = localStorage.getItem('loginid');
  public details: any[]=[];

  ngOnInit(): void {
    this.db.fetchUserByInterest(this.login_id).then((data: any)=>{
      console.log(data);
      this.details = data;
    })
  }

  viewProfile(login_id: any){
    this.router.navigate(['/user/matrimony/individualprofile'], {queryParams: {id: login_id}})
  }

  isModalOpen: boolean = false; // Controls visibility of the modal
  
     // Open the modal
     openModal(first_name: string,last_name: string, login_id: string, interest_id : string): void {
       this.isModalOpen = true;
       this.name = first_name+' '+last_name;
       this.login_id = login_id;
       this.interest_id = interest_id;
     }
   
     // Close the modal
     closeModal(): void {
       this.isModalOpen = false;
     }

     sendResponse(isAccepted: boolean,) {
      if (isAccepted) {
        this.sendAcceptanceMessage(this.interest_id);
      } else {
        this.sendDeclineMessage(this.interest_id);
      }
      this.closeModal();
    }

    sendAcceptanceMessage(interest_id: string) {
     this.db.acceptInterest({interest_id}).then((data: any)=>{
        alert(`${data.message}`)
      })
    }
  
    sendDeclineMessage(interest_id: string) {
      this.db.declineInterest({interest_id}).then((data:any)=>{
        alert(`${data.message}`);
      })
    }
}
