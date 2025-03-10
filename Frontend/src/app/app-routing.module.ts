import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './admin/header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
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
import { CreateprofilematrimonyComponent } from './user/matrimony/createprofilematrimony/createprofilematrimony.component';
import { NavbarComponent } from './user/layout/navbar/navbar.component';
import { UploadimagesComponent } from './user/matrimony/uploadimages/uploadimages.component';
import { EditprofileComponent } from './user/matrimony/editprofile/editprofile.component';
import { ViewmatrimonyprofileComponent } from './admin/matrimony/viewmatrimonyprofile/viewmatrimonyprofile.component';
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
import { ViewusermatrimonyprofileComponent } from './admin/matrimony/viewusermatrimonyprofile/viewusermatrimonyprofile.component';
import { UpdatedisabilitydetailsComponent } from './user/career/updatedisabilitydetails/updatedisabilitydetails.component';
import { LandingpageComponent } from './guest/landingpage/landingpage.component';
import { InterestMessageComponent } from './user/matrimony/interest-message/interest-message.component';
import { ReceivedallinterestComponent } from './user/matrimony/receivedallinterest/receivedallinterest.component';
import { ReceivedpendinginterestComponent } from './user/matrimony/receivedpendinginterest/receivedpendinginterest.component';
import { ReceivedacceptedinterestComponent } from './user/matrimony/receivedacceptedinterest/receivedacceptedinterest.component';
import { ReceiveddeclinedinterestComponent } from './user/matrimony/receiveddeclinedinterest/receiveddeclinedinterest.component';
import { SendallinterestComponent } from './user/matrimony/sendallinterest/sendallinterest.component';
import { SendpendinginterestComponent } from './user/matrimony/sendpendinginterest/sendpendinginterest.component';
import { SenddeclinedinterestComponent } from './user/matrimony/senddeclinedinterest/senddeclinedinterest.component';
import { SendacceptedinterestComponent } from './user/matrimony/sendacceptedinterest/sendacceptedinterest.component';
import { FindjobComponent } from './user/career/findjob/findjob.component';
import { MatchingJobComponent } from './user/career/matching-job/matching-job.component';
import { ViewinterestmanagementComponent } from './admin/matrimony/viewinterestmanagement/viewinterestmanagement.component';
import { AcceptedinterestComponent } from './admin/matrimony/acceptedinterest/acceptedinterest.component';
import { PendinginterestComponent } from './admin/matrimony/pendinginterest/pendinginterest.component';
import { DeclinedinterestComponent } from './admin/matrimony/declinedinterest/declinedinterest.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
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
        path: 'resulthandler',
        component: NoResultComponent,
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
          {
            path: 'findpartner',
            component: FindmatchingprofileComponent,
          },
          {
            path: 'matrimonyusers',
            component: UsermatrimonyprofileComponent,
          },
          {
            path: 'individualprofile',
            component: IndividualprofileComponent,
          },
          {
            path: 'familydetails',
            component: FamilydetailsComponent,
          },
          {
            path: 'biodetails',
            component: BiodetailsComponent,
          },
          {
            path: 'setpreference',
            component: SetpreferenceComponent,
          },
          {
            path: 'interest',
            component: InterestMessageComponent,
            children: [
              {
                path: 'received',
                children: [
                  {
                    path: 'received_all',
                    component: ReceivedallinterestComponent
                  },
                  {
                    path: 'pending',
                    component: ReceivedpendinginterestComponent
                  },{
                    path: 'accepted',
                    component: ReceivedacceptedinterestComponent
                  },
                  {
                    path: 'declined',
                    component: ReceiveddeclinedinterestComponent
                  }
                ]
              },
              {
                path: 'send',
                children: [
                  {
                    path: 'received_all',
                    component: SendallinterestComponent
                  },
                  {
                    path: 'pending',
                    component: SendpendinginterestComponent
                  }
                  ,{
                    path: 'declined',
                    component: SenddeclinedinterestComponent
                  }
                  ,{
                    path: 'accepted',
                    component: SendacceptedinterestComponent
                  }
                ]
              }
            ]
          }
        ],
      },
      {
        path: 'career',
        children: [
          {
            path: 'updatedisability',
            component: UpdatedisabilitydetailsComponent
          },
          {
            path: 'findjob',
            component: FindjobComponent,
            children: [
              {
                path: 'matching-job',
                component: MatchingJobComponent
              }
            ]
          }
        ]
      }
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
          {
            path:'viewindividualprofile',
            component: ViewusermatrimonyprofileComponent
          }
          ,
          {
            path: 'viewinterestmanagement',
            component: ViewinterestmanagementComponent,
            children: [
              {
                path: 'acceptedinterest',
                component: AcceptedinterestComponent
              },
              {
                path: 'pendinginterest',
                component: PendinginterestComponent
              },
              {
                path: 'declinedinterest',
                component: DeclinedinterestComponent
              }
            ]
          }
        ],
      },
      {
        path: 'education',
        children: [
          {
            path: 'department',
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
            path: 'editcourse',
            component: EditcourseComponent,
          },
        ],
      },
      {
        path: 'career',
        children: [
          {
            path: 'createjobcategory',
            component: JobcategoryComponent,
          },
          {
            path: 'createjob',
            component: JobComponent,
          },
          {
            path: 'editjobcategory',
            component: UpdatejobcategoryComponent,
          },
          {
            path: 'viewjobcategory',
            component: ViewjobcategoryComponent,
          },
          {
            path: 'viewjob',
            component: ViewjobComponent,
          },
          {
            path: 'editjob',
            component: EditjobComponent,
          },
        ],
      },
      {
        path: 'job',
        component: JobComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
