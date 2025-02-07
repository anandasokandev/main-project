import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  fetchDepartment(){
    return this.http.get<any>('http://localhost:3000/fetchdepartment').toPromise();
  }

  createDepartment(data: any){
    return this.http.post('http://localhost:3000/createdepartment',data).toPromise();
  }

  createCourse(data: any){
    return this.http.post('http://localhost:3000/createcourse',data).toPromise();
  }

  fetchCourse(){
    return this.http.get<any>('http://localhost:3000/fetchcourse').toPromise();
  }

  fetchCourseById(data:any){
    return this.http.post('http://localhost:3000/fetchcoursebyid',data).toPromise();
  }

  login(data:any){
    return this.http.post('http://localhost:3000/login',data).toPromise();
  }

  registerUser(data:any){
    return this.http.post('http://localhost:3000/userregister',data).toPromise();
  }

  checkUsername(data:any){
    return this.http.post('http://localhost:3000/fetchusername',data).toPromise();
  }

  fetchPincode(pincode:any) {
    return this.http.get(`https://api.postalpincode.in:443/pincode/${pincode}`).toPromise();
  }

  createJobCategory(data: any){
    return this.http.post('http://localhost:3000/createjobcategory',data).toPromise();
  }

  createJob(data:any) {
    return this.http.post('http://localhost:3000/createjob',data).toPromise();
  }

  fetchJobCategory(){
    return this.http.get('http://localhost:3000/fetchjobcategory').toPromise();
  }

  fetchJob(data: any){
    return this.http.post('http://localhost:3000/fetchjob',data).toPromise();
  }

  fetchUser(loginId: any){
    return this.http.get(`http://localhost:3000/fetchuser/?login_id=${loginId}`).toPromise();
  }

  createUserProfile(data: any){
    return this.http.post('http://localhost:3000/createuserprofile',data).toPromise();
  }

  fetchUserCategory(data: any){
    return this.http.get(`http://localhost:3000/fetchusercategory?loginid=${data}`).toPromise();
  }

  updateUserCategory(data: any){
    return this.http.put('http://localhost:3000/updateusercategory',data).toPromise();
  }

  fetchDisabilityCategory(){
    return this.http.get('http://localhost:3000/fetchdisabilitycategory').toPromise();
  }

  fetchDisabilitySubCategoryById(data: any){
    return this.http.get(`http://localhost:3000/fetchsubdisability?id=${data}`).toPromise();
  }

  fetchDisabilityUser(data: any){
    return this.http.get(`http://localhost:3000/fetchdisabilityuser?id=${data}`).toPromise();
  }

  fetchCourseOnly(){
    return this.http.get('http://localhost:3000/fetchcourseonly').toPromise();
  }

  fetchPersonalizedCourse(data: any){
    return this.http.post('http://localhost:3000/fetchpersonalizedcourse',data).toPromise();
  }

  fetchCourseByCId(course_id: any){
    return this.http.get(`http://localhost:3000/fetchcoursebycid?course_id=${course_id}`).toPromise();
  }

  fetchDisabilityByName(loginid: any){
    return this.http.get(`http://localhost:3000/fetchdisabilityname?id=${loginid}`).toPromise();
  }

  admissionSubmit(data: any){
    return this.http.post('http://localhost:3000/submitadmissionform',data).toPromise();
  }

  fetchAdmission(loginid: any){
    return this.http.get(`http://localhost:3000/fetchadmission?loginid=${loginid}`).toPromise();
  }


}
