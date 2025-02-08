import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-admissionview',
  templateUrl: './admissionview.component.html',
  styleUrls: ['./admissionview.component.scss']
})
export class AdmissionviewComponent implements OnInit {

  // Form group for filtering admission details
  admissionForm = this.fb.group({
    fromDate: ['', [Validators.required]],
    toDate: ['', [Validators.required]],
    status: ['', [Validators.required]]
  });

  // Variables to hold data
  admissionDetails: any[] = [];
  pendingFormCount: number = 0;
  reviewedFormCount: number = 0;
  totalForms: number = 0;
  isDataLoaded: boolean = false;
  minDate: string = new Date().toISOString().split('T')[0]; // Set minimum date to today

  constructor(private db: DatabaseService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    // Fetch the pending and reviewed form counts when the component initializes
    this.db.fetchAdmissionOnly().then((data: any) => {
      this.pendingFormCount = data
      // this.reviewedFormCount = data.reviewedForms || 0;
      this.totalForms = this.pendingFormCount + this.reviewedFormCount;
    });
  }

  // Method to calculate progress bar background based on counts
  getProgressBarStyle(completed: number, total: number): string {
    const percentage = total === 0 ? 0 : (completed / total) * 100;
    return `conic-gradient(#4caf50 ${percentage}%, #e0e0e0 ${percentage}%)`;
  }

  navigateToStudentProfile(admission_id: string,login_id: string){
    this.router.navigate(['/admin/education/viewadmissionprofile'], { queryParams: { admission_id: admission_id , login_id: login_id} });
  }

  // Submit method to fetch admission details based on the filter
  onSubmit(): void {
    const fromDate = this.admissionForm.value.fromDate ?? '';
    const toDate = this.admissionForm.value.toDate ?? '';
    const status = this.admissionForm.value.status ?? '';

    // Fetch admission details based on filters
    this.db.fetchAdmissionDetails(fromDate, toDate, status).then((data: any) => {
      this.admissionDetails = data;
      this.isDataLoaded = true;
      // Set flag to show the table only after data is loaded
    }).catch((error) => {
      console.error('Error fetching data', error);
      this.isDataLoaded = false; // In case of error, don't display the table
    });
  }
}
