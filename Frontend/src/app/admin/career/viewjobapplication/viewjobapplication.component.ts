import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewjobapplication',
  templateUrl: './viewjobapplication.component.html',
  styleUrls: ['./viewjobapplication.component.scss']
})
export class ViewjobapplicationComponent {

    disabilityCategory: any []=[];
    subcategory: any[]=[];
    job: any[]=[];
    user: any[]=[]
  
    constructor(private db: DatabaseService){}
  
      filter = {
      job: '',
      endDate: '',
      startDate: '',
      status: '',
      disabilityCategory: '',
      disabilitySubCategory: '',
    };
  
    ngOnInit(): void {
      this.db.fetchJobOnly().then((data:any)=>{
        console.log(data);
        this.job = data;
      })
  
      this.fetchDisability();
    }
  
      fetchDisability() {
        this.db.fetchDisabilityCategory().then((data: any) => {
          console.log(data);
          this.disabilityCategory = data;
        });
      }
    
      fetchSubDisability() {
        const id = this.filter.disabilityCategory;
        console.log(id);
        this.db.fetchDisabilitySubCategoryById(id).then((data: any) => {
          this.subcategory = data;
          console.log(this.subcategory);
        });
      }
    
  
    fetchUser(){
      console.log(this.filter);
      
      this.db.fetchJobApplicationReports(this.filter).then((data:any)=>{
        console.log(data);
        
        if(data.message === 'Records retrieved successfully'){
          this.user = data.data;
        }else{
          this.user = []
        }
      })
    }
}
