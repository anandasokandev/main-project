import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-pendinginterest',
  templateUrl: './pendinginterest.component.html',
  styleUrls: ['./pendinginterest.component.scss'],
})
export class PendinginterestComponent {
  pendingUser: any[] = [];
  number: any = '';

  constructor(private db: DatabaseService, private location: Location) {}

  ngOnInit(): void {
    this.db.fetchPendingInterest().then((data: any) => {
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
