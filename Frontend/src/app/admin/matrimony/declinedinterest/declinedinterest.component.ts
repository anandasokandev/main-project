import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-declinedinterest',
  templateUrl: './declinedinterest.component.html',
  styleUrls: ['./declinedinterest.component.scss']
})
export class DeclinedinterestComponent {
  pendingUser: any[] = [];
  number: any = '';

  constructor(private db: DatabaseService, private location: Location) {}

  ngOnInit(): void {
    this.db.fetchDeclinedInterest().then((data: any) => {
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
