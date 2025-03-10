import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

interface Job {
  job_id: string;
  job_name: string;
  description: string;
  jobcat_id: string;
}

interface JobCategory {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.scss']
})
export class EditjobComponent implements OnInit {
  job_id: string = '';
  jobForm: FormGroup;
  job:string = '';
  isLoading: boolean = false;
  jobCategory: any[] = [];

  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.jobForm = this.fb.group({
      jobname: ['', [Validators.required]],
      jobDescription: ['', [Validators.required]],
      jobcategory:[''],
      job_id: this.job_id
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.job_id = params['job_id'];
      this.loadJobData();
    });
  }

  loadJobData() {
    this.isLoading = true;
    try {
      this.db.fetchJobCategory().then((data:any)=>{
        this.jobCategory = data;
      })

      this.db.fetchJobByJobId(this.job_id).then((data: any)=>{
        if (data.length > 0) {
          this.jobForm.patchValue({
            jobname: data[0].job_name,
            jobDescription: data[0].description,
            jobcategory: data[0].jobcat_id,
            job_id: this.job_id
          });
        }
      })
    } catch (error) {
      console.error('Error fetching job data:', error);
      alert('Failed to load job data. Please try again later.');
    } finally {
      this.isLoading = false;
    }
  }

  updateJob() {
    if (this.jobForm.valid) {
      this.db.updateJob(this.jobForm.value).then((data: any) => {
        if (data.message === 'Success') {
          alert('Job updated successfully');
          this.router.navigate(['/admin/career/viewjob']);
        }
      }).catch(error => {
        console.error('Error updating job:', error);
        alert('Failed to update job. Please try again later.');
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}