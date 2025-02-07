import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DepartmentComponent } from './admin/education/department/department.component';
import { ViewdepartmentComponent } from './admin/education/viewdepartment/viewdepartment.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditdepartmentComponent } from './admin/education/editdepartment/editdepartment.component';
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
import { SidebarComponent } from './user/layout/sidebar/sidebar.component';
import { MainDashboardComponent } from './user/layout/main-dashboard/main-dashboard.component';
import { UserDashboardComponent } from './user/layout/user-dashboard/user-dashboard.component';
import { SuggestedcourseComponent } from './user/education/suggestedcourse/suggestedcourse.component';
import { CourseselectionComponent } from './user/education/courseselection/courseselection.component';
import { AdmissionFormComponent } from './user/education/admissionform/admissionform.component';
import { UpdateprofileComponent } from './user/matrimony/updateprofile/updateprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DepartmentComponent,
    ViewdepartmentComponent,
    EditdepartmentComponent,
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
    SidebarComponent,
    MainDashboardComponent,
    UserDashboardComponent,
    SuggestedcourseComponent,
    CourseselectionComponent,
    AdmissionFormComponent,
    UpdateprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
