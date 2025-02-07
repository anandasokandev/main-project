import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-suggestedcourse',
  templateUrl: './suggestedcourse.component.html',
  styleUrls: ['./suggestedcourse.component.scss']
})
export class SuggestedcourseComponent implements OnInit {
  
  courses: any[] = [];  // To store the list of courses
  selectedCourse: any = null;  // To store the selected course (single course object)

  constructor(
    private db: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const course_id = localStorage.getItem('courseid');
    console.log(course_id);

    // Fetch course by ID (or some other course data if needed)
    this.db.fetchCourseByCId(course_id).then((data: any) => {
      this.courses = data;  // Assuming this is an array of suggested courses
      console.log(data);
    });
  }

  // Handle course selection
  onSelectCourse(course: any): void {
    this.selectedCourse = course;
  }

  // Handle submission
  onSubmit() {
    if (this.selectedCourse) {
      localStorage.setItem('coursename',this.selectedCourse.course_name);
      alert('You have selected ' + this.selectedCourse.course_name + ' and you are redirecting to admission page');
      this.router.navigate(['/user/education/admission']);
    } else {
      alert('Please select a course before submitting.');
    }
  }
}
