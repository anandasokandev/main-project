import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-view-disability',
  templateUrl: './view-disability.component.html',
  styleUrls: ['./view-disability.component.scss']
})
export class ViewDisabilityComponent {
  
  id: string = '';
  disability: any[] = []

  constructor(private db: DatabaseService,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      this.id = data.id;
    });

    this.db.fetchUser(this.id).then((data: any)=>{
      this.disability = data
      console.log(this.disability);
      
    })
  }

}
