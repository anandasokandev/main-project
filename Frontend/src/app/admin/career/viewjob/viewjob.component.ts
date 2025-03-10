import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.scss']
})
export class ViewjobComponent {
    jobcat: any[] = [];  
    errorMessage: string = '';
    loadResult: boolean = false;  
    job: any[] = [];
  
    constructor(private db: DatabaseService, private fb: FormBuilder, private router: Router) {}

    jobCategoryForm = this.fb.group({
      jobcategory: [''],
    });
  
    ngOnInit(): void {
      this.db.fetchJobCategory().then((data: any)=>{
        this.jobcat = data;
      })
    }

    viewByJobCategory = () => {
      const jobcat_id = this.jobCategoryForm.value.jobcategory;
      this.db.fetchJob({jobcat_id}).then((data: any)=>{
        this.job = data;
      })
    };
  
    deleteJob(job_id: string){
      this.db.deleteJob(job_id).then((data:any)=>{
        if(data.message === 'Success'){
          alert('Job deleted successfully');
          this.router.navigateByUrl('/admin/career/viewjob')
        }else{
          alert('Failed');
        }
      })
    }
  
    editJob(job_id : string){
      this.router.navigate(['/admin/career/editjob'], { queryParams: { job_id: job_id }});
    }
}
