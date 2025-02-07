import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.scss']
})
export class AdmissionFormComponent {

  public course_id:any = '';
  login_id = localStorage.getItem('loginid');
  public user:any[]=[];
  public disability:any[]=[];
  public course:any[]=[];
  
  constructor(
    private db: DatabaseService,
    private router:Router,
    private fb:FormBuilder
  ){}

  admissionForm = this.fb.group({
    loginid:[''],
    courseid:['']
  })

  

  onSubmit(){

     this.db.admissionSubmit(this.admissionForm.value).then((data: any)=>{
      if(data.message === 'Form submitted successfully'){
        alert('Admission Form Submitted Successfully');
        this.router.navigate(['/user/dashboard']);
      }
    })


  }

  ngOnInit(): void {

   
    this.course_id = localStorage.getItem('courseid');
    console.log(this.course_id);
    console.log(this.login_id);
    
    this.db.fetchUser(this.login_id).then((data: any)=>{
      this.user = data.data;
      console.log(this.user);
    })

    this.db.fetchDisabilityByName(this.login_id).then((data: any)=>{
      console.log(data);
      this.disability  = data;
    })

    this.db.fetchCourseByCId(this.course_id).then((data: any)=>{
      this.course = data;
      console.log(this.course);
      
    })

    this.admissionForm.patchValue({
      loginid:this.login_id,
      courseid: this.course_id
     });


    
  }
}
