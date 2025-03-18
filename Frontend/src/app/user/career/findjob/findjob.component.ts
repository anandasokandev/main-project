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
  jobCategoryDetails: any[] = []; // Default value for selected job category
  loadJob: boolean = false;
  loading: boolean = false;
  login_id = localStorage.getItem('loginid');
  user: any[] = [];
  isVisible: boolean = false;
  localData: string = '';

  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.fetchJobCategory();

    this.db.fetchUser(this.login_id).then((data: any) => {
      this.user = data;
    });
  }

  // Fetching the job categories from the database service
  fetchJobCategory() {
    this.db.fetchJobCategory().then((data: any) => {
      this.jobCategory = data;
    });
  }

  // Get selected category details based on jobcat_id
  getSelectedCategoryDetails() {
    this.db.fetchJobCategoryById(this.jobCategorySelected).then((data: any) => {
      this.jobCategoryDetails = data;
    });
  }

  findMatchingJob() {
    const filter = {
      disability_id: this.user[0].disability_sub_category,
      jobcat_id: this.jobCategorySelected
    };

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.loadJob = true;

      this.db.fetchMatchingJob(filter).then((data: any) => {
        console.log(data);
        if (data.message === 'No data found') {
          this.showModal();
          this.loadJob = false;
        } else{
          this.router.navigate(['/user/career/findjob/matching-job']);
          localStorage.setItem('jobData', JSON.stringify(data.result));
        }
      });
    }, 1000);
  }

  showModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
