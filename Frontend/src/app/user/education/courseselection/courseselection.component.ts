import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-courseselection',
  templateUrl: './courseselection.component.html',
  styleUrls: ['./courseselection.component.scss']
})
export class CourseselectionComponent {

  constructor(
    private db:DatabaseService,
    private router:Router,
    private fb:FormBuilder
  ){}

  coursearray:any[]=[];
  personalized:any[]=[];
  disability:any = '';
  subcategory:any = ''

  courseForm = this.fb.group({
    course: this.fb.array([])
  })

  onCourseChange(event: any, course_id: any): void {
    const courseFormArray = this.courseForm.get('course') as FormArray;
  
    if (event.target.checked) {
      // Add course ID to the form array when checked
      courseFormArray.push(this.fb.control(course_id));
    } else {
      // Remove category ID from the form array when unchecked
      const index = courseFormArray.controls.findIndex(control => control.value === course_id);
      if (index >= 0) {
        courseFormArray.removeAt(index);
      }
    }

    console.log(this.courseForm.value);
    
 }


  isSelected(data: any){

  }

  submitSelectedCategories(){

    const selectedCourseId = this.courseForm.value.course;
    const disabilityDetails = this.disability;

    const requestPayload = {
      courses: selectedCourseId,
      disabilities: disabilityDetails
    }

    this.db.fetchPersonalizedCourse(requestPayload).then((data: any)=>{
      this.personalized = data;
      console.log(this.personalized);
      if(data.message === 'No personalized course found'){
        alert('No personalized course found. Please reselect');
      }else if(data.message === 'Personalized course found'){
        localStorage.setItem("courseid", data.courseDetails[0].course_id);
        alert('Personalized course found');
        this.router.navigate(['/user/education/suggestedcourse'])
      }
    })
  }

  ngOnInit(): void {

    const login_id = localStorage.getItem('loginid');
    console.log(login_id);
    

    this.db.fetchCourseOnly().then((data: any)=>{
      this.coursearray = data;
    })

    this.db.fetchDisabilityUser(login_id).then((data: any)=>{
      this.disability = data.disabilityDetails.disability_sub_category;
    })

    this.db.fetchAdmission(login_id).then((data: any)=>{
      if(data.message === 'Already Submitted'){
        alert('Form Already Submitted. Please wait for approval');
        this.router.navigate(['/user/dashboard']);
      }
    })
    
  }
}
