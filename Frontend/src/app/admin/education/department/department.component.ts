import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {

  constructor(private fb: FormBuilder,private db: DatabaseService,private router: Router){}

  deptForm = this.fb.group({ 
    deptName: [''], 
    deptDesc:[''],
    disabilitypercent:[''],
  }) 


  onSubmit(){

    console.log(this.deptForm.value);
    
    this.db.createDepartment(this.deptForm.value).then((confirmation: any)=>{
      if(confirmation.message == "Success") {
        alert('Registered Successfully');
        this.router.navigate(['/viewdepartment'])
      }
      else{
        alert('Registration failed');
      }
    })
  }
}
