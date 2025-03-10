import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-acceptedinterest',
  templateUrl: './acceptedinterest.component.html',
  styleUrls: ['./acceptedinterest.component.scss']
})
export class AcceptedinterestComponent {
  pendingUser: any[] = [];
  number: any = '';

  constructor(private db: DatabaseService, private location: Location) {}

  ngOnInit(): void {
    this.db.fetchAcceptedInterest().then((data: any) => {
      if (data.length > 0) {
        console.log(data);
        this.pendingUser = data;
        this.number = data.length;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
