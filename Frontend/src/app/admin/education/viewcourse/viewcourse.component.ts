import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.scss'],
})
export class ViewcourseComponent {
  constructor(
    private db: DatabaseService,
    private fb: FormBuilder,
    private router: Router
  ) {}


  public course: any[] = [];
  public dept: any[] = [];
  loadResult: boolean = false;

  viewByDepartment = () => {
    const department_id = this.departmentForm.value.department;
    console.log(department_id);
    this.db.fetchCourseById({ department_id }).then((data: any) => {
      this.course = data;
      console.log(this.course);
      this.loadResult = true;
      if (data.affectedRows === 0) {
        alert('No Courses Found');
      }
    });
  };

  ngOnInit(): void {
    this.fetchDept();
  }

  departmentForm = this.fb.group({
    department: [''],
  });

  fetchCourse = () => {
    this.db.fetchCourse().then((data) => {
      this.course = data;
    });
  };

  fetchDept = () => {
    this.db.fetchDepartment().then((data) => {
      this.dept = data;
    });
  };
}
