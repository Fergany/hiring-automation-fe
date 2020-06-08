import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { AppComponent } from './app.component';
import { JobSubmissionComponent } from './jobs/job-submission/job-submission.component';
import { JobApplicationsComponent } from './jobs/job-applications/job-applications.component';
import { JobApplicationComponent } from './jobs/job-application/job-application.component';


const routes: Routes = [
  
  {
    path: '', component: AppComponent
    , children: [
      {
        path: 'job', children: [
          { path: ':id', component: JobDetailsComponent },
          { path: ':id/apply', component: JobSubmissionComponent },
          { path: ':id/applications', component: JobApplicationsComponent }
        ]
      },
      {
        path: 'jobApplication', children: [
          { path: ':id', component: JobApplicationComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
