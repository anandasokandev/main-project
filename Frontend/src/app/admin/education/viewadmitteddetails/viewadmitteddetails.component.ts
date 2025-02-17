import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewadmitteddetails',
  templateUrl: './viewadmitteddetails.component.html',
  styleUrls: ['./viewadmitteddetails.component.scss'],
})
export class ViewadmitteddetailsComponent implements OnInit {

  // Declare the forms as class properties
  departmentForm: FormGroup;
  courseForm: FormGroup;

  userProfile: boolean = false;
  public dept: any[] = [];
  public course: any[] = []
  loadCourse: boolean = false
  public userDetails:any[]=[]


  // Inject the dependencies through the constructor
  constructor(
    private db: DatabaseService,
    private router: Router,
    private fb: FormBuilder
  ) {
   
    this.departmentForm = this.fb.group({
      department: [''] 
    });

    this.courseForm = this.fb.group({
      course: ['']
    });
  }

  viewDepartment(): void {
    const department_id = this.departmentForm.value.department;
    if (department_id) {
      this.db.fetchCourseById({ department_id }).then((data: any) => {
        this.course = data;
        this.loadCourse = true
        console.log(this.course);
        if (data.affectedRows === 0) {
          alert('No Courses Found');
        }
      });
    }
  }

  viewCourse(){
    const course_id = this.courseForm.value.course;
    console.log(course_id);
    
    if(course_id){
      this.db.fetchStudentByCourse(course_id).then((data: any)=>{
        this.userDetails = data;
        if(data.message === 'Failed'){
          alert('No details found')
          this.userProfile = false
        }else{
          this.userProfile = !this.userProfile
        }
        console.log(this.userDetails);
        
      })
    }
  }

  ngOnInit(): void {
    this.db.fetchDepartment().then((data) => {
      this.dept = data;
    });
  }
}
