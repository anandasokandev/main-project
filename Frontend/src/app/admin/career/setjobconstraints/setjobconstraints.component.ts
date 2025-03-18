import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-setjobconstraints',
  templateUrl: './setjobconstraints.component.html',
  styleUrls: ['./setjobconstraints.component.scss']
})
export class SetjobconstraintsComponent {
   public jobcategory:any[]=[];
   job: any[]=[];
   disabilityCategory: any[]=[];
   disabilitySubCategory : any[]=[];
  
    constructor(
      private db: DatabaseService,
      private fb: FormBuilder
    ){}
  
    jobForm = this.fb.group({
      jobcategory: [],
      job: [],
      disabilitycategory:[],
      disabilitysubcategory:[]
    })
  
    ngOnInit(): void {
      this.db.fetchJobCategory().then((data: any)=>{
        this.jobcategory = data
      })

      this.db.fetchDisabilityCategory().then((data: any)=>{
        this.disabilityCategory = data;
        console.log(data);
      })

    }
  
    createJob(){
      this.db.createJob(this.jobForm.value).then((data: any)=>{
        if(data.message === 'Job created successfully'){
          alert(`${data.message}`);
        }
        else{
          alert(`${data.message}`);
        }
      })
    }

    getJob(){
      const jobcat_id = this.jobForm.value.jobcategory;
      this.db.fetchJob({jobcat_id}).then((data: any)=>{
        this.job = data;
      })
    }

    getDisabilitySub(){
      const category_id = this.jobForm.value.disabilitycategory;
      this.db.fetchDisabilitySubCategoryById(category_id).then((data: any) => {
        this.disabilitySubCategory = data;
        console.log(data);
        
      });
    }

    setConstraints(){
      console.log(this.jobForm.value);
      this.db.setConstraints(this.jobForm.value).then((data:any)=>{
        if(data.message === 'Success'){
          alert('Constraint set successfully');
        }else{
          alert('Failed');
        }
      })
    }
}
