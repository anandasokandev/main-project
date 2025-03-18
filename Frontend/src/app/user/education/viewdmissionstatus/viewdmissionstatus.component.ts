import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewdmissionstatus',
  templateUrl: './viewdmissionstatus.component.html',
  styleUrls: ['./viewdmissionstatus.component.scss'],
})
export class ViewdmissionstatusComponent {
  admissionForm = new FormGroup({
    status: new FormControl(''),
    startdate: new FormControl(''),
    enddate: new FormControl('')
  });

  noResult: boolean = false;
  admissionData: any[]=[];
  constructor(private db: DatabaseService){};

  getAction(){
    const { status, startdate, enddate } = this.admissionForm.value;
    const filter = {
      status: status,
      startdate: startdate,
      enddate: enddate,
      login_id : localStorage.getItem('loginid')
    };
    this.db.fetchAdmissionStatus(filter).then((data: any)=>{
      if(data.message === 'Records retrieved successfully'){
        this.admissionData = data.data;
        this.noResult = true;
      }else{
        this.noResult = false;
      }
    })
  }
  deleteApplicationForm(data: any){
    this.db.deleteAdmissionForm(data).then((data:any)=>{
      console.log(data);
      if(data.message === 'Success'){
        alert('Deleted successfully');
      }else{
        alert('Failed to delete');
        this.admissionData = []
      }
    })
  }
}

