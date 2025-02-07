import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  public dept:any[]=[];
  
  constructor(private db: DatabaseService, private router: Router,private fb: FormBuilder){
  }

  courseForm = this.fb.group({
    department:[],
    courseName:[],
    courseCode:[],
    courseDuration:[],
    courseDesc:[]
  })

  ngOnInit(): void {
    this.fetchDepartment();
  }
  
  createCourse(){
    console.log(this.courseForm.value);
    this.db.createCourse(this.courseForm.value).then((confirmation: any)=>{
      if(confirmation.message == "Success") {
        alert('Registered Successfully');
        this.router.navigate(['/viewcourse'])
      }
      else{
        alert('Registration failed');
      }
    })
    
  }

  fetchDepartment(){
    this.db.fetchDepartment().then((data)=>{
      this.dept = data;
    })
  }
}
