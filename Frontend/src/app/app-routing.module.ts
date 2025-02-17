import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './admin/header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DepartmentComponent } from './admin/education/department/department.component';
import { ViewdepartmentComponent } from './admin/education/viewdepartment/viewdepartment.component';
import { CourseComponent } from './admin/education/course/course.component';
import { ViewcourseComponent } from './admin/education/viewcourse/viewcourse.component';
import { LoginComponent } from './guest/authentication/login/login.component';
import { AdmissionviewComponent } from './admin/education/admissionview/admissionview.component';
import { SignupComponent } from './guest/authentication/signup/signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { JobcategoryComponent } from './admin/career/jobcategory/jobcategory.component';
import { ViewjobcategoryComponent } from './admin/career/viewjobcategory/viewjobcategory.component';
import { JobComponent } from './admin/career/job/job.component';
import { ViewjobComponent } from './admin/career/viewjob/viewjob.component';
import { SelectcategoryComponent } from './user/selectcategory/selectcategory.component';
import { DisabilityComponent } from './user/disability/disability.component';
import { AdmissionFormComponent } from './user/education/admissionform/admissionform.component';
import { UserDashboardComponent } from './user/layout/user-dashboard/user-dashboard.component';
import { CourseselectionComponent } from './user/education/courseselection/courseselection.component';
import { SuggestedcourseComponent } from './user/education/suggestedcourse/suggestedcourse.component';
import { ViewadmissionprofileComponent } from './admin/education/viewadmissionprofile/viewadmissionprofile.component';
import { ViewadmitteddetailsComponent } from './admin/education/viewadmitteddetails/viewadmitteddetails.component';
import { EditdepartmentComponent } from './admin/education/editdepartment/editdepartment.component';
import { CreateprofilematrimonyComponent } from './user/matrimony/createprofilematrimony/createprofilematrimony.component';
import { LandingpageComponent } from './guest/landingpage/landingpage.component';
import { NavbarComponent } from './user/layout/navbar/navbar.component';
import { UploadimagesComponent } from './user/matrimony/uploadimages/uploadimages.component';
import { EditprofileComponent } from './user/matrimony/editprofile/editprofile.component';
import { ViewmatrimonyprofileComponent } from './admin/matrimony/viewmatrimonyprofile/viewmatrimonyprofile.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'guest',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
  {
    path: 'user',
    component: NavbarComponent,
    children: [
      {
        path: 'dashboard',
        component: UserDashboardComponent,
      },
      {
        path: 'userprofilereg',
        component: ProfileComponent,
      },
      {
        path: 'usercategory',
        component: SelectcategoryComponent,
      },
      {
        path: 'education',
        children: [
          {
            path: 'admission',
            component: AdmissionFormComponent,
          },
          {
            path: 'disability',
            component: DisabilityComponent,
          },
          {
            path: 'courseselection',
            component: CourseselectionComponent,
          },
          {
            path: 'suggestedcourse',
            component: SuggestedcourseComponent,
          },
        ],
      },
      {
        path: 'matrimony',
        children: [
          {
            path: 'createprofile',
            component: CreateprofilematrimonyComponent,
          },
          {
            path: 'uploadimages',
            component: UploadimagesComponent,
          },
          {
            path: 'editprofile',
            component: EditprofileComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'admin',
    component: HeaderComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'matrimony',
        children: [
          {
            path: 'viewmatrimonyprofiles',
            component: ViewmatrimonyprofileComponent,
          },
        ],
      },
      {
        path: 'education',
        children: [
          {
            path: 'createdepartment',
            component: DepartmentComponent,
          },
          {
            path: 'viewdepartment',
            component: ViewdepartmentComponent,
          },
          {
            path: 'createcourse',
            component: CourseComponent,
          },
          {
            path: 'viewcourse',
            component: ViewcourseComponent,
          },
          {
            path: 'admission',
            component: AdmissionviewComponent,
          },
          {
            path: 'viewadmissionprofile',
            component: ViewadmissionprofileComponent,
          },
          {
            path: 'viewadmitteddetails',
            component: ViewadmitteddetailsComponent,
          },
          {
            path: 'editdepartment',
            component: EditdepartmentComponent,
          },
        ],
      },
      {
        path: 'jobcategory',
        component: JobcategoryComponent,
      },
      {
        path: 'viewjobcategory',
        component: ViewjobcategoryComponent,
      },
      {
        path: 'job',
        component: JobComponent,
      },
      {
        path: 'viewjob',
        component: ViewjobComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
