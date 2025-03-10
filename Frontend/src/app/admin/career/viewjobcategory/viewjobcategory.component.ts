import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewjobcategory',
  templateUrl: './viewjobcategory.component.html',
  styleUrls: ['./viewjobcategory.component.scss'],
})
export class ViewjobcategoryComponent implements OnInit {
  jobcategory: any[] = [];
  errorMessage: string = '';

  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.db
      .fetchJobCategory()
      .then((data) => {
        if (Array.isArray(data)) {
          this.jobcategory = data;
        } else {
          this.errorMessage = 'Invalid data format received from the server.';
        }
      })
      .catch((error) => {
        this.errorMessage = 'Failed to load job categories.';
        console.error(error);
      });
  }

  deleteJobCategory(jobcat_id: string) {
    this.db.deleteJobCategory(jobcat_id).then((data: any) => {
      if (data.message === 'Success') {
        alert('Job Category deleted successfully');
        this.router.navigateByUrl('/admin/career/viewjobcategory');
      } else {
        alert('Failed');
      }
    });
  }

  editJobcategory(jobcat_id: string) {
    this.router.navigate(['/admin/career/editjobcategory'], {
      queryParams: { jobcat_id: jobcat_id },
    });
  }
}
