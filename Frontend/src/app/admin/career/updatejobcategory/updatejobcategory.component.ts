import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-updatejobcategory',
  templateUrl: './updatejobcategory.component.html',
  styleUrls: ['./updatejobcategory.component.scss']
})
export class UpdatejobcategoryComponent {
  jobcat_id: string = '';
  jobCategoryForm: FormGroup;
  jobcategory: any[] = [];
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.jobCategoryForm = this.fb.group({
      jobCategoryName: ['', [Validators.required]],
      jobCategoryDesc: ['', [Validators.required]],
      qualification: [''],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.jobcat_id = params['jobcat_id'];
    });

    this.db.fetchJobCategoryById(this.jobcat_id).then((data: any)=>{
      this.jobCategoryForm.patchValue({
        jobCategoryName: data[0].jobcat_name,
        jobCategoryDesc: data[0].description,
        qualification: data[0].qualification, 
      });
    })
  }
  
  onSubmit() {

    this.db
      .updateJobCategory({ ...this.jobCategoryForm.value, jobcat_id: this.jobcat_id })
      .then((data: any) => {
        if(data.message === 'Success'){
          alert('Success');
          this.router.navigate(['/admin/career/viewjobcategory'])
        }
      })
  }
}
