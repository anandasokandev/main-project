import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewadmissionprofile',
  templateUrl: './viewadmissionprofile.component.html',
  styleUrls: ['./viewadmissionprofile.component.scss'],
})
export class ViewadmissionprofileComponent {
  admission_id: string = '';
  login_id: string = '';
  userDetails:any[]=[];

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the loginId from the query parameters
    this.route.queryParams.subscribe((params) => {
      this.admission_id = params['admission_id'];
      this.login_id = params['login_id'];
    });

    this.db.fetchSpecificAdmission(this.admission_id, this.login_id).then((data:any)=>{
      this.userDetails = data;
      console.log(this.userDetails);
      
    })
  }
}
