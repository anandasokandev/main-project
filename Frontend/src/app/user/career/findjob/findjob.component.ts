import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-findjob',
  templateUrl: './findjob.component.html',
  styleUrls: ['./findjob.component.scss']
})
export class FindjobComponent {

  jobCategory: any[] = [];
  jobCategorySelected: string = '';
  jobCategoryDetails:any []=[] // Default value for selected job category
  loadJob : boolean = false
  
  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.fetchJobCategory();
  }

  // Fetching the job categories from the database service
  fetchJobCategory() {
    this.db.fetchJobCategory().then((data: any) => {
      this.jobCategory = data;
    });
  }

  // Get selected category details based on jobcat_id
  getSelectedCategoryDetails() {
    this.db.fetchJobCategoryById(this.jobCategorySelected).then((data: any)=>{
      this.jobCategoryDetails = data;
      console.log(this.jobCategoryDetails);
      
    })
  }

  findMatchingJob(){
    
    this.loadJob = !this.loadJob;
    this.router.navigate(['/user/career/findjob/matching-job']);
  }

}
