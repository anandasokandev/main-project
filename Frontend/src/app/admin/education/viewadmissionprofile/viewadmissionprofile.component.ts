import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewadmissionprofile',
  templateUrl: './viewadmissionprofile.component.html',
  styleUrls: ['./viewadmissionprofile.component.scss'],
})
export class ViewadmissionprofileComponent {
  admissionid: string = '';
  loginid: string = '';
  userDetails:any[]=[];
  ststusDetails: string = ''

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the loginId from the query parameters
    this.route.queryParams.subscribe((params) => {
      this.admissionid = params['admission_id'];
      this.loginid = params['login_id'];
    });

    this.db.fetchSpecificAdmission(this.admissionid, this.loginid).then((data:any)=>{
      this.userDetails = data;
      console.log(this.userDetails);
      
    })
  }


  admitStudent(){

    const payload = {
      login_id : this.loginid,
      admission_id: this.admissionid
    }
    this.db.admitStudent(payload).then((data:any)=>{
      if(data.message === 'Admission status updated successfully')
      {
        alert('Student admitted successfully');
        this.router.navigate(['/admin/dashboard'])
      }
    })
  }
}
