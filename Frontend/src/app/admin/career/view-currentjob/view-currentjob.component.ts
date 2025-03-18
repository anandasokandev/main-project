import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-view-currentjob',
  templateUrl: './view-currentjob.component.html',
  styleUrls: ['./view-currentjob.component.scss']
})
export class ViewCurrentjobComponent {

  login_id: string = ''
  job: any[]=[];
  profile: boolean = false

  constructor(private db: DatabaseService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.queryParams.subscribe((data: any) => {
      this.login_id = data.id;
    });

    this.db.fetchSpecificJobStatus(this.login_id).then((data: any)=>{
      console.log(data);
      this.job = data.data;
      if(data.message === 'Success'){
        console.log(data.data[0].form_status);
        if(data.data[0].form_status === 'Approved'){
          this.profile = !this.profile;
        }else{
          this.profile = !this.profile;
        }
      }
    })
  }
}
