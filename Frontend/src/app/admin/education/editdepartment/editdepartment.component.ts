import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.scss'],
})
export class EditdepartmentComponent {
  dept_id: string = '';
  deptForm: FormGroup;
  dept: any[] = [];
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.deptForm = this.fb.group({
      dept_name: ['', [Validators.required]],
      dept_desc: ['', [Validators.required]],
      dept_id: [''],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.dept_id = params['dept_id'];

      
      this.db
        .fetchDepartmentById(this.dept_id)
        .then((data: any) => {
          this.dept = data;

          this.deptForm.patchValue({
            dept_name: data.dept_name,
            dept_desc: data.dept_desc,
            dept_id: data.dept_id, 
          });

        })
    });
  }
  
  onSubmit() {

    
    this.db
      .updateDepartment({ ...this.deptForm.value, dept_id: this.dept_id })
      .then((data: any) => {
        if(data.message === 'Success'){
          alert('Success');
          this.router.navigate(['/admin/education/viewdepartment'])
        }
      })
  }
}
