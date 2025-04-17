import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewcontactrequest',
  templateUrl: './viewcontactrequest.component.html',
  styleUrls: ['./viewcontactrequest.component.scss']
})
export class ViewcontactrequestComponent {


  login_id = localStorage.getItem('loginid');
  user: any[]=[];

  constructor(private db: DatabaseService){}

  ngOnInit(): void {
    this.db.fetchRequestContactAll(this.login_id).then((data:any)=>{
      this.user = data.data;
      console.log(this.user);
    })
  }

  async requestContact(request_id: any) {
    try {
     
      if (!request_id) {
        alert('Request ID is required');
        return;
      }
  
      // Assuming db.acceptContactRequest returns a promise
      const data: any = await this.db.acceptContactRequest( { request_id } );
      console.log(data);
  
      if (data.message === 'Success') {
        alert('Success');
      } else {
        alert('Failed');
      }
    } catch (error) {
      console.error('Error while processing contact request:', error);
      alert('An error occurred. Please try again later.');
    }
  }
  
}
