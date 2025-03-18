import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-userjobstatusview',
  templateUrl: './userjobstatusview.component.html',
  styleUrls: ['./userjobstatusview.component.scss']
})
export class UserjobstatusviewComponent implements OnInit {

  jobForm = new FormGroup({
    status: new FormControl(''),
    startdate: new FormControl(''),
    enddate: new FormControl('')
  });

  jobData: any[] = [];
  noResult: boolean = false;
  reviewDate: any = ''

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    
  }

  getAction() {
    const { status, startdate, enddate } = this.jobForm.value;
    const filter = {
      status: status,
      startdate: startdate,
      enddate: enddate,
      login_id : localStorage.getItem('loginid')
    };
    console.log('Filter data:', filter);

    this.db.fetchJobStatus(filter).then((data: any)=>{
      if(data.message === 'Records retrieved successfully'){
        this.jobData = data.data
        console.log(this.jobData);
        this.noResult = true;
      }else{
        this.noResult = false;
        this.jobData = []
      }
    })
   }
   
   deleteJobForm(item: any) {
    console.log('Deleting job application with ID:', item.jobform_id);
    this.db.deleteJobApplication(item.jobform_id).then((data: any) => {
      if (data.message === 'Success') {
        alert('Application deleted successfully');
      } else {
        alert('Failed');
      }
    }).catch(error => {
      console.error('Error deleting job application:', error);
      alert('An error occurred while deleting the application.');
    });
  }
  
}
