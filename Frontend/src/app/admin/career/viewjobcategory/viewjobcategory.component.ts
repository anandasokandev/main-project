import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewjobcategory',
  templateUrl: './viewjobcategory.component.html',
  styleUrls: ['./viewjobcategory.component.scss']
})
export class ViewjobcategoryComponent implements OnInit {

  jobcategory: any[] = [];  
  errorMessage: string = '';  

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    
    this.db.fetchJobCategory()
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
}
