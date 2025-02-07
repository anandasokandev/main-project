import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {

  public jobcategory:any[]=[];

  constructor(
    private db: DatabaseService,
    private fb: FormBuilder
  ){}

  jobForm = this.fb.group({
    jobcategory: [''],
    jobname: [''],
    jobDescription:[''],
    disabilityPercent: ['']
  })

  createJob(){

  }

}
