import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrls: ['./viewdepartment.component.scss']
})
export class ViewdepartmentComponent {

  public dept:any[]=[];

  constructor(private db:DatabaseService, private router: Router){}

  ngOnInit(): void {
    this.fetchDepartment();
  }

  deleteDepartment(deptid: any){
    
    const dept_id =  deptid;
    console.log(dept_id);
    
    
    this.db.deleteDepartment(dept_id).then((data:any)=>{
      if(data.message === 'Success'){
        alert('Department deleted successfully');
        this.router.navigateByUrl('/admin/education/viewdepartment')
      }else{
        alert('Failed');
      }
    })
  }

  editDepartment(dept_id: string){
      this.router.navigate(['/admin/education/editdepartment'], { queryParams: { dept_id: dept_id }});
  }

  fetchDepartment(){
    this.db.fetchDepartment().then((data)=>{
      this.dept = data;
      console.log(data);
      
    })
  }
}
