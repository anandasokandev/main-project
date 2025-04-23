import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  matrimonyCount = '';
  careerCount = '';
  educationCount = ''

  constructor(private router: Router, private db: DatabaseService) {}

  ngOnInit(): void {
    this.fetchMatrimonyCount();
    this.fetchEducationCount();
    this.fetchCareerCount();
  }

  async fetchMatrimonyCount() {
    try {
      const data = await this.db.matrimonyCount();  // add parentheses!
      this.matrimonyCount = data.count;
    } catch (error) {
      console.error('Error fetching matrimony count:', error);
      this.matrimonyCount = 'Error';
    }
  }

  async fetchCareerCount() {
    try {
      const data = await this.db.careerCount();  // add parentheses!
      this.careerCount = data.count;
    } catch (error) {
      console.error('Error fetching matrimony count:', error);
      this.matrimonyCount = 'Error';
    }
  }

  async fetchEducationCount() {
    try {
      const data = await this.db.educationCount();  // add parentheses!
      this.educationCount = data.count;
    } catch (error) {
      console.error('Error fetching matrimony count:', error);
      this.matrimonyCount = 'Error';
    }
  }
  
 
}
