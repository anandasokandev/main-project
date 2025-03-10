import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-jobcategory',
  templateUrl: './jobcategory.component.html',
  styleUrls: ['./jobcategory.component.scss']
})
export class JobcategoryComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DatabaseService
  ){}

  jobCategoryForm = this.fb.group({
    jobCategoryName: [''],
    jobCategoryDesc: [''],
    qualification: ['']
  })

  onSubmit(){
    this.db.createJobCategory(this.jobCategoryForm.value).then((data: any)=>{
      if(data.message == 'Jobcategory created successfully' ){
        alert('Job Category Created Successfully');
      }
    })
  }

}
