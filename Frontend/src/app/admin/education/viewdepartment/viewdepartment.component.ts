import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrls: ['./viewdepartment.component.scss']
})
export class ViewdepartmentComponent {

  public dept:any[]=[];

  constructor(private db:DatabaseService){}

  ngOnInit(): void {
    this.fetchDepartment();
  }

  fetchDepartment(){
    this.db.fetchDepartment().then((data)=>{
      this.dept = data;
    })
  }
}
