import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-familydetails',
  templateUrl: './familydetails.component.html',
  styleUrls: ['./familydetails.component.scss']
})
export class FamilydetailsComponent {

  constructor(private fb: FormBuilder, private router: Router, private db: DatabaseService) {}

  familyForm = this.fb.group({
    fathername:[],
    fatheroccupation:[],
    mothername:[],
    motheroccupation:[],
    sister:[],
    brother:[],
    login_id: localStorage.getItem('loginid')
  })

  ngOnInit(): void {
    const login_id = localStorage.getItem('loginid');

    this.db.fetchFamilyDetails(login_id).then((data: any)=>{
      if(data.message === 'Already exists'){
        this.router.navigate(['/user/matrimony/biodetails']);
      }
      
    })
  }
  createProfile(): void{

    this.db.createFamilyDetails(this.familyForm.value).then((data: any)=>{
      console.log(data);
      
      if(data.message === 'Success'){
        alert('Details inserted sucessfully');
        this.router.navigate(['/user/matrimony/biodetails']);
      }
    })
    
  }

}
