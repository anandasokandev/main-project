import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.scss'],
})
export class EditcourseComponent {
  public dept: any[] = [];
  public course_id: string = ''

  constructor(
      private fb: FormBuilder,
      private db: DatabaseService,
      private route: ActivatedRoute,
      private router: Router
    ) {}

  courseForm = this.fb.group({
    department: [''],
    courseName: [],
    courseCode: [],
    courseDuration: [],
    courseDesc: [],
    course_id: []
  });

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      this.course_id = params['course_id'];
    });

    this.db.fetchDepartment().then((data: any)=>{
      this.dept = data
    })

    this.db.fetchCourseByCId(this.course_id).then((data: any)=>{
      console.log(data);
      
      this.courseForm.patchValue({
        courseName: data[0].course_name,
        courseDesc: data[0].description,
        courseCode: data[0].course_code,
        department: data[0].dept_id,
        courseDuration: data[0].duration,
        course_id: data[0].course_id
      });
    })
  }

  editCourse(){
    this.db.editCourse(this.courseForm.value).then((data: any)=>{
      if(data.message === 'Success'){
        alert('Course details edited successfully');
      }
      else{
        alert( `${data.message}`);
      }
    })
  }

}
