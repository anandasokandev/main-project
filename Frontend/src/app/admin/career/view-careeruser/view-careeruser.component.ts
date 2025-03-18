import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-view-careeruser',
  templateUrl: './view-careeruser.component.html',
  styleUrls: ['./view-careeruser.component.scss']
})
export class ViewCareeruserComponent {

  id: string = ''
  user: any[]=[];

  constructor(private db: DatabaseService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      this.id = data.id;
    });

    this.db.fetchUser(this.id).then((data: any)=>{
      this.user = data
    })

    this.careerhome(this.id);
  }

  careerhome(login_id: any){
    this.router.navigate(['/admin/career/view-careeruser/careerhome'],{queryParams: {id: login_id }});
  }
  viewDisability(login_id: any){
    this.router.navigate(['/admin/career/view-careeruser/disability'],{queryParams: {id: login_id }});
  }
  viewCurrentJob(login_id: any){
    this.router.navigate(['/admin/career/view-careeruser/currentjob'],{queryParams: {id: login_id }});
  }
}
