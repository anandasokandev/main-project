import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,  HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient, private router: Router) { }

  public data: any[]=[]

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
  fetchMatrimonyProfileAll(data: any){
    return this.http.post('http://localhost:3000/fetchmatrimonyprofileall',data).toPromise();
  }
  
  fetchPartner(data: any){
    return this.http.post('http://localhost:3000/findpartner',data).toPromise();
  }

  setMatrimonyData(data: any){
    this.data = data;
  }

  getMatrimonyData(){
    return this.data;
  }

  fetchMatrimonyById(login_id: any){
    return this.http.get(`http://localhost:3000/fetchmatrimonybyid?login_id=${login_id}`).toPromise();
  }

  fetchImages(login_id: any){
    return this.http.get(`http://localhost:3000/fetchimages?login_id=${login_id}`).toPromise();
  }

  createFamilyDetails(data: any){
    return this.http.post('http://localhost:3000/createfamilydetails',data).toPromise();
  }

  fetchFamilyDetails(login_id: any){
    return this.http.get(`http://localhost:3000/fetchfamilydetails?login_id=${login_id}`).toPromise();
  }

  createBioDetails(data: any){
    return this.http.post('http://localhost:3000/createbiodetails',data).toPromise();
  }

  fetchBioDetails(login_id: any){
    return this.http.get(`http://localhost:3000/fetchbiodetails?login_id=${login_id}`).toPromise();
  }

  fetchPreference(login_id:any){
    return this.http.get(`http://localhost:3000/fetchpreference?login_id=${login_id}`).toPromise();
  }

  createPreference(data: any){
    return this.http.post('http://localhost:3000/createpreference',data).toPromise();
  }

  sendInterest(data: any){
    return this.http.post('http://localhost:3000/sendinterest',data).toPromise();
  }

  fetchInterest(login_id: any,interest_loginid: any){
    return this.http.get(`http://localhost:3000/fetchinterest?login_id=${login_id}&interest_loginid=${interest_loginid}`).toPromise();
  }

  fetchInterestByUser(login_id: any){
    return this.http.get(`http://localhost:3000/fetchinterestbyuser?login_id=${login_id}`).toPromise();
  }

  fetchUserByInterest(login_id: any){
    return this.http.get(`http://localhost:3000/fetchuserbyinterest?login_id=${login_id}`).toPromise();
  }

  deleteInterest({ login_id, interest_loginid }: { login_id: any, interest_loginid: any }) {
    return this.http.delete(`http://localhost:3000/deleteinterest?login_id=${login_id}&interest_loginid=${interest_loginid}`).toPromise();
  }
  
  editMatrimonyProfile(data: any){
    return this.http.put('http://localhost:3000/editmatrimonyprofile',data).toPromise();
  }

  logout(){
    localStorage.removeItem('loginid');
    localStorage.clear();
    this.router.navigate(['/']);
  }

  fetchReceivedInterest(login_id: any){
    return this.http.get(`http://localhost:3000/fetchreceivedinterest?login_id=${login_id}`).toPromise();
  }

  fetchExpressedInterest(login_id: any){
    return this.http.get(`http://localhost:3000/fetchexpressedinterest?login_id=${login_id}`).toPromise();
  }

  fetchMutualInterest(){
    return this.http.get(`http://localhost:3000/fetchmutualinterest`).toPromise();
  }

  fetchJobCategoryById(jobcat_id: any){
    return this.http.get(`http://localhost:3000/fetchjobcategorybyid?jobcat_id=${jobcat_id}`).toPromise();
  }

  updateJobCategory(data: any){
    return this.http.put('http://localhost:3000/updatejobcategory?',data).toPromise();
  }

  deleteJobCategory(jobcat_id: any){
    return this.http.delete(`http://localhost:3000/deletejobcategory?jobcat_id=${jobcat_id}`).toPromise();
  }
  
  deleteCourse(course_id : any){
    return this.http.delete( `http://localhost:3000/deletecourse?course_id=${course_id}`).toPromise();
  }

  editCourse(data: any){
    return this.http.put('http://localhost:3000/editcourse',data).toPromise();
  }

  fetchJobByJobId(job_id: any){
    return this.http.get(`http://localhost:3000/fetchjobbyjobid?job_id=${job_id}`).toPromise();
  }

  updateJob(data: any){
    return this.http.put('http://localhost:3000/updatejob',data).toPromise();
  }

  deleteJob(job_id: string){
    return this.http.delete(`http://localhost:3000/deletejob?job_id=${job_id}`).toPromise();
  }

  disableMatrimonyProfile(data: any){
    return this.http.put('http://localhost:3000/matrimonydisable',data).toPromise();
  }

  fetchreceivedpendinginterest(data: any){
    return this.http.get(`http://localhost:3000/fetchreceivedpendinginterest?login_id=${data}`).toPromise();
  }

  fetchreceivedacceptedinterest(data: any){
    return this.http.get(`http://localhost:3000/fetchreceivedacceptedinterest?login_id=${data}`).toPromise();
  }

  fetchreceiveddeclinedinterest(data: any){
    return this.http.get(`http://localhost:3000/fetchreceiveddeclinedinterest?login_id=${data}`).toPromise();
  }

  fetchsendinterestall(data: any){
    return this.http.get(`http://localhost:3000/fetchsendinterestall?login_id=${data}`).toPromise();
  }

  fetchsendinterestpending(data: any){
    return this.http.get(`http://localhost:3000/fetchsendinterestpending?login_id=${data}`).toPromise();
  }

  fetchsendinterestaccepted(data: any){
    return this.http.get(`http://localhost:3000/fetchsendinterestaccepted?login_id=${data}`).toPromise();
  }

  fetchsendinterestdeclined(data: any){
    return this.http.get(`http://localhost:3000/fetchsendinterestdeclined?login_id=${data}`).toPromise();
  }

  declineInterest(data: any){
    return this.http.put('http://localhost:3000/declineinterest',data).toPromise();
  }

  acceptInterest(data: any){
    return this.http.put('http://localhost:3000/acceptinterest',data).toPromise();
  }

  fetchDeclinedInterest(){
    return this.http.get(`http://localhost:3000/fetchdeclinedinterest`).toPromise();
  }

  fetchAcceptedInterest(){
    return this.http.get(`http://localhost:3000/fetchacceptedinterest`).toPromise();
  }

  fetchPendingInterest(){
    return this.http.get(`http://localhost:3000/fetchpendinginterest`).toPromise();
  }

  setConstraints(data: any){
    return this.http.post('http://localhost:3000/setjobconstraints',data).toPromise();
  }

  fetchMatchingJob(data: any){
    return this.http.get(`http://localhost:3000/findmatchingjob?disability_id=${data.disability_id}&jobcat_id=${data.jobcat_id}`).toPromise();
  }

  submitJobForm(data: any){
    return this.http.post('http://localhost:3000/submitjobform',data).toPromise();
  }

  fetchSubmittedJob(filter: any){
    return this.http.get(`http://localhost:3000/fetchsubmittedjob?login_id=${filter.login_id}&job_id=${filter.job_id}`).toPromise();
  }

  fetchSubmittedAnyJob(login_id: any){
    return this.http.get(`http://localhost:3000/fetchsubmittedanyjob?login_id=${login_id}`).toPromise();
  }
  
  fetchJobStatus(data: any){
    return this.http.post('http://localhost:3000/fetchjobstatus',data).toPromise();
  }
  
  updateDisability(data: any){
    return this.http.put('http://localhost:3000/updatedisability',data).toPromise();
  }

  deleteJobApplication(jobform_id: any){
    return this.http.delete(`http://localhost:3000/deletejobform?id=${jobform_id}`).toPromise();
  }

  fetchAdmissionStatus(data: any){
    return this.http.post('http://localhost:3000/fetchadmissionstatus',data).toPromise();
  }

  deleteAdmissionForm(data: any){
    return this.http.delete(`http://localhost:3000/deleteadmissionform?id=${data}`).toPromise();
  }

  fetchMatrimonyUserProfile(data: any){
    return this.http.post('http://localhost:3000/fetchuserprofile',data).toPromise();
  }
  fetchCareerUsers(data: any){
    return this.http.post('http://localhost:3000/fetchcareerusers',data).toPromise();
  }

  disableUser(data: any){
    return this.http.put('http://localhost:3000/disableuser',data).toPromise();
  }

  enableUser(data: any){
    return this.http.put('http://localhost:3000/enableuser',data).toPromise();
  }

  fetchSpecificJobStatus(data:any){
    return this.http.get(`http://localhost:3000/fetchspecificjobstatus?login_id=${data}`).toPromise();
  }

  fetchMatrimonyReport(data: any){
    return this.http.post(`http://localhost:3000/fetchmatrimonyreport`,data).toPromise();
  }
  admissionReports(data:any){
    return this.http.post(`http://localhost:3000/admissionreport`,data).toPromise();
  }

  fetchJobApplicationReports(data: any){
    return this.http.post(`http://localhost:3000/jobapplicationreport`,data).toPromise();
  }

  fetchJobOnly(){
    return this.http.get(`http://localhost:3000/fetchjobonly`).toPromise();
  }

  fetchAdmissionUsers(data: any){
    return this.http.post(`http://localhost:3000/fetchadmissionusers`,data).toPromise();
  }

  approvedJobForm(data: any){
    return this.http.put(`http://localhost:3000/approvejobform`,data).toPromise();
  }

  fetchPendingJobApplication(data:any){
    return this.http.post(`http://localhost:3000/fetchpendingjobapplication`,data).toPromise();
  }

  fetchRequestContact(from_loginid: any,to_loginid: any){
    return this.http.get(`http://localhost:3000/fetchrequestcontact?login_id=${from_loginid}&interest_loginid=${to_loginid}`).toPromise();
  }

  requestContact(data: {login_id: any,interest_loginid: any}){
    return this.http.post(`http://localhost:3000/requestcontact`,data).toPromise();
  }

  fetchRequestContactAll(login_id: any){
    return this.http.get(`http://localhost:3000/fetchrequestcontactall?login_id=${login_id}`).toPromise();
  }

  acceptContactRequest(data: any){
    return this.http.put(`http://localhost:3000/acceptcontactrequest`,data).toPromise();
  }

  matrimonyCount(){
    return this.http.get<any>('http://localhost:3000/fetchmatrimonynumber').toPromise();
  }

  careerCount(){
    return this.http.get<any>('http://localhost:3000/fetchcareernumber').toPromise();
  }

  educationCount(){
    return this.http.get<any>('http://localhost:3000/fetcheducationnumber').toPromise();
  }

  updatePassword(data:{ newpassword , login_id}) {
    return this.http.post<any>(`http://localhost:3000/updatepassword`,data).toPromise();
  }

  fetchUserByUsername(username: any){
    return this.http.get<any>(`http://localhost:3000/fetchuserbyusername?username=${username}`).toPromise();
  }

  updateUserPassword(data: {newpassword ,username}){
    return this.http.post<any>(`http://localhost:3000/updateuserpassword`,data).toPromise();
  }
}


