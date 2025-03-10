import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewinterestmanagement',
  templateUrl: './viewinterestmanagement.component.html',
  styleUrls: ['./viewinterestmanagement.component.scss']
})
export class ViewinterestmanagementComponent {

  accepted: string  = ''
  declined: string = ''
  pending: string = ''

  constructor(private router: Router,private db: DatabaseService ){}

  ngOnInit(): void {
    this.db.fetchAcceptedInterest().then((data:any)=>{
      console.log(data);
      
      this.accepted = data.length;
    })

    this.db.fetchDeclinedInterest().then((data:any)=>{
      this.declined = data.length;
    })

    this.db.fetchPendingInterest().then((data: any)=>{
      this.pending = data.length;
    })
  }
}
