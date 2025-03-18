import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-matching-job',
  templateUrl: './matching-job.component.html',
  styleUrls: ['./matching-job.component.scss'],
})
export class MatchingJobComponent {
  jobData: any[] = [];
  isEmpty: boolean = false;
  login_id = localStorage.getItem('loginid');
  modalMessage: string = '';
  isModalVisible: boolean = false;

  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    const storedData = localStorage.getItem('jobData');
    if (storedData) {
      try {
        this.jobData = JSON.parse(storedData);
        this.isEmpty = this.jobData.length === 0;
        console.log(this.jobData);
      } catch (error) {
        console.error('Error parsing job data from localStorage', error);
        this.isEmpty = true;
      }
    } else {
      this.isEmpty = true; // No job data in localStorage
      console.log('No job data found in localStorage');
    }
  }

  openStatusModal(message: string): void {
    this.modalMessage = message;  // 'success' or 'failure'
    this.isModalVisible = true; // Show the modal
  }

  // Close the modal
  closeModal(): void {
    this.isModalVisible = false;
  }

  submitJob(data: any): void {
    const filter = {
      login_id: this.login_id,
      job_id: data.job_id,
      form_status: 'Submitted'
    };
    console.log(filter);
    this.db.fetchSubmittedJob(filter).then((data:any)=>{
      if(data.message === 'Success'){
        this.openStatusModal('Job application already exists');
      }else{
        this.db.submitJobForm(filter).then((response: any)=>{
          if(response.message === 'Success'){
            this.openStatusModal('Job application submitted successfully');
          }
        })
      }
    })
  }
}
