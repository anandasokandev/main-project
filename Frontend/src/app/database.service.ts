import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,  HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';


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
    return this.http.get(`http://localhost:3000/fetchusername?username=${data}`).toPromise();
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

  fetchAdmissionDetails(fromDate: string,toDate: string, status: string){
    return this.http.get(`http://localhost:3000/fetchadmissiondetails?fromDate=${fromDate}&toDate=${toDate}&status=${status}`).toPromise();
  }

  fetchAdmissionOnly(){
    return this.http.get('http://localhost:3000/fetchadmissiononly').toPromise();
  }

  fetchSpecificAdmission(admissionId: string, loginId: string){
    return this.http.get(`http://localhost:3000/fetchspecificadmission?admission_id=${admissionId}&login_id=${loginId}`).toPromise();
  }

  admitStudent(data: any){
    return this.http.put('http://localhost:3000/admitstudent',data).toPromise();
  }

  fetchStudentByCourse(course_id: string){
    return this.http.get(`http://localhost:3000/fetchstudentbycourse?course_id=${course_id}`).toPromise();
  }

  fetchDepartmentById(dept_id: string){
    return this.http.get(`http://localhost:3000/fetchdeptbyid?dept_id=${dept_id}`).toPromise();
  }

  updateDepartment(data:any){
    return this.http.put('http://localhost:3000/updatedept',data).toPromise();
  }

  deleteDepartment(dept_id: any){
    return this.http.delete(`http://localhost:3000/deletedept?dept_id=${dept_id}`).toPromise();
  }

  upload(file : File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `http://localhost:3000/upload`,
      formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  createMatrimonyProfile(data: any){
    return this.http.post('http://localhost:3000/createprofile',data).toPromise();
  }

  fetchMatrimonyProfile(loginid: any){
    return this.http.get(`http://localhost:3000/fetchmatrimonyprofile?loginid=${loginid}`).toPromise();
  }

}
