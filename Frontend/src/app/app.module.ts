import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ViewdepartmentComponent } from './admin/education/viewdepartment/viewdepartment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './admin/education/course/course.component';
import { ViewcourseComponent } from './admin/education/viewcourse/viewcourse.component';
import { LoginComponent } from './guest/authentication/login/login.component';
import { SignupComponent } from './guest/authentication/signup/signup.component';
import { AdmissionviewComponent } from './admin/education/admissionview/admissionview.component';
import { LandingpageComponent } from './guest/landingpage/landingpage.component';
import { ProfileComponent } from './user/profile/profile.component';
import { JobcategoryComponent } from './admin/career/jobcategory/jobcategory.component';
import { JobComponent } from './admin/career/job/job.component';
import { ViewjobComponent } from './admin/career/viewjob/viewjob.component';
import { ViewjobcategoryComponent } from './admin/career/viewjobcategory/viewjobcategory.component';
import { SelectcategoryComponent } from './user/selectcategory/selectcategory.component';
import { DisabilityComponent } from './user/disability/disability.component';
import { NavbarComponent } from './user/layout/navbar/navbar.component';
import { UserDashboardComponent } from './user/layout/user-dashboard/user-dashboard.component';
import { SuggestedcourseComponent } from './user/education/suggestedcourse/suggestedcourse.component';
import { CourseselectionComponent } from './user/education/courseselection/courseselection.component';
import { AdmissionFormComponent } from './user/education/admissionform/admissionform.component';
import { ViewadmissionprofileComponent } from './admin/education/viewadmissionprofile/viewadmissionprofile.component';
import { ViewadmitteddetailsComponent } from './admin/education/viewadmitteddetails/viewadmitteddetails.component';
import { CreateprofilematrimonyComponent } from './user/matrimony/createprofilematrimony/createprofilematrimony.component';
import { UploadimagesComponent } from './user/matrimony/uploadimages/uploadimages.component';
import { EditprofileComponent } from './user/matrimony/editprofile/editprofile.component';
import { ViewmatrimonyprofileComponent } from './admin/matrimony/viewmatrimonyprofile/viewmatrimonyprofile.component';
import { ViewusermatrimonyprofileComponent } from './admin/matrimony/viewusermatrimonyprofile/viewusermatrimonyprofile.component';
import { FindmatchingprofileComponent } from './user/matrimony/findmatchingprofile/findmatchingprofile.component';
import { UsermatrimonyprofileComponent } from './user/matrimony/usermatrimonyprofile/usermatrimonyprofile.component';
import { IndividualprofileComponent } from './user/matrimony/individualprofile/individualprofile.component';
import { FamilydetailsComponent } from './user/matrimony/familydetails/familydetails.component';
import { BiodetailsComponent } from './user/matrimony/biodetails/biodetails.component';
import { SetpreferenceComponent } from './user/matrimony/setpreference/setpreference.component';
import { NoResultComponent } from './no-result/no-result.component';
import { EditcourseComponent } from './admin/education/editcourse/editcourse.component';
import { EditjobComponent } from './admin/career/editjob/editjob.component';
import { UpdatejobcategoryComponent } from './admin/career/updatejobcategory/updatejobcategory.component';
import { UpdatedisabilitydetailsComponent } from './user/career/updatedisabilitydetails/updatedisabilitydetails.component';
import { InterestMessageComponent } from './user/matrimony/interest-message/interest-message.component';
import { ReceivedallinterestComponent } from './user/matrimony/receivedallinterest/receivedallinterest.component';
import { ReceivedpendinginterestComponent } from './user/matrimony/receivedpendinginterest/receivedpendinginterest.component';
import { ReceivedacceptedinterestComponent } from './user/matrimony/receivedacceptedinterest/receivedacceptedinterest.component';
import { ReceiveddeclinedinterestComponent } from './user/matrimony/receiveddeclinedinterest/receiveddeclinedinterest.component';
import { SendallinterestComponent } from './user/matrimony/sendallinterest/sendallinterest.component';
import { SendpendinginterestComponent } from './user/matrimony/sendpendinginterest/sendpendinginterest.component';
import { SendacceptedinterestComponent } from './user/matrimony/sendacceptedinterest/sendacceptedinterest.component';
import { SenddeclinedinterestComponent } from './user/matrimony/senddeclinedinterest/senddeclinedinterest.component';
import { FindjobComponent } from './user/career/findjob/findjob.component';
import { MatchingJobComponent } from './user/career/matching-job/matching-job.component';
import { ViewinterestmanagementComponent } from './admin/matrimony/viewinterestmanagement/viewinterestmanagement.component';
import { PendinginterestComponent } from './admin/matrimony/pendinginterest/pendinginterest.component';
import { AcceptedinterestComponent } from './admin/matrimony/acceptedinterest/acceptedinterest.component';
import { DeclinedinterestComponent } from './admin/matrimony/declinedinterest/declinedinterest.component';
import { SetjobconstraintsComponent } from './admin/career/setjobconstraints/setjobconstraints.component';
import { UserjobstatusviewComponent } from './user/career/userjobstatusview/userjobstatusview.component';
import { ViewEditprofileComponent } from './user/view-editprofile/view-editprofile.component';
import { ViewdmissionstatusComponent } from './user/education/viewdmissionstatus/viewdmissionstatus.component';
import { ViewuserprofileComponent } from './admin/matrimony/viewuserprofile/viewuserprofile.component';
import { ViewcareeruserprofileComponent } from './admin/career/viewcareeruserprofile/viewcareeruserprofile.component';
import { ViewCareeruserComponent } from './admin/career/view-careeruser/view-careeruser.component';
import { ViewCareerhomeComponent } from './admin/career/view-careerhome/view-careerhome.component';
import { ViewDisabilityComponent } from './admin/career/view-disability/view-disability.component';
import { ViewCurrentjobComponent } from './admin/career/view-currentjob/view-currentjob.component';
import { MatrimonyUsersComponent } from './admin/matrimony/Reports/matrimony-users/matrimony-users.component';
import { ViewadmissionDetailsComponent } from './admin/education/Reports/viewadmission-details/viewadmission-details.component';
import { JobapplicationreportsComponent } from './admin/career/Reports/jobapplicationreports/jobapplicationreports.component';
import { VieweducationusersComponent } from './admin/education/vieweducationusers/vieweducationusers.component';
import { ViewjobapplicationComponent } from './admin/career/viewjobapplication/viewjobapplication.component';
import { ViewcontactrequestComponent } from './user/matrimony/viewcontactrequest/viewcontactrequest.component';
import { ChangepasswordComponent } from './user/matrimony/changepassword/changepassword.component';
import { ForgotPasswordComponent } from './guest/authentication/forgot-password/forgot-password.component';
import { MycourseComponent } from './user/education/mycourse/mycourse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ViewdepartmentComponent,
    CourseComponent,
    ViewcourseComponent,
    LoginComponent,
    SignupComponent,
    AdmissionviewComponent,
    LandingpageComponent,
    ProfileComponent,
    JobcategoryComponent,
    JobComponent,
    ViewjobComponent,
    ViewjobcategoryComponent,
    SelectcategoryComponent,
    DisabilityComponent,
    NavbarComponent,
    UserDashboardComponent,
    SuggestedcourseComponent,
    CourseselectionComponent,
    AdmissionFormComponent,
    ViewadmissionprofileComponent,
    ViewadmitteddetailsComponent,
    CreateprofilematrimonyComponent,
    UploadimagesComponent,
    EditprofileComponent,
    ViewmatrimonyprofileComponent,
    ViewusermatrimonyprofileComponent,
    FindmatchingprofileComponent,
    UsermatrimonyprofileComponent,
    IndividualprofileComponent,
    FamilydetailsComponent,
    BiodetailsComponent,
    SetpreferenceComponent,
    NoResultComponent,
    EditcourseComponent,
    EditjobComponent,
    UpdatejobcategoryComponent,
    UpdatedisabilitydetailsComponent,
    InterestMessageComponent,
    ReceivedallinterestComponent,
    ReceivedpendinginterestComponent,
    ReceivedacceptedinterestComponent,
    ReceiveddeclinedinterestComponent,
    SendallinterestComponent,
    SendpendinginterestComponent,
    SendacceptedinterestComponent,
    SenddeclinedinterestComponent,
    FindjobComponent,
    MatchingJobComponent,
    ViewinterestmanagementComponent,
    PendinginterestComponent,
    AcceptedinterestComponent,
    DeclinedinterestComponent,
    SetjobconstraintsComponent,
    UserjobstatusviewComponent,
    ViewEditprofileComponent,
    ViewdmissionstatusComponent,
    ViewuserprofileComponent,
    ViewcareeruserprofileComponent,
    ViewCareeruserComponent,
    ViewCareerhomeComponent,
    ViewDisabilityComponent,
    ViewCurrentjobComponent,
    MatrimonyUsersComponent,
    ViewadmissionDetailsComponent,
    JobapplicationreportsComponent,
    VieweducationusersComponent,
    ViewjobapplicationComponent,
    ViewcontactrequestComponent,
    ChangepasswordComponent,
    ForgotPasswordComponent,
    MycourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
