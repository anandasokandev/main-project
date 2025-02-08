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
import { MainDashboardComponent } from './user/layout/main-dashboard/main-dashboard.component';
import { UserDashboardComponent } from './user/layout/user-dashboard/user-dashboard.component';
import { CourseselectionComponent } from './user/education/courseselection/courseselection.component';
import { SuggestedcourseComponent } from './user/education/suggestedcourse/suggestedcourse.component';
import { UpdateprofileComponent } from './user/matrimony/updateprofile/updateprofile.component';
import { ViewadmissionprofileComponent } from './admin/education/viewadmissionprofile/viewadmissionprofile.component';
const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: MainDashboardComponent,
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
            path: 'updateprofile',
            component: UpdateprofileComponent,
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
