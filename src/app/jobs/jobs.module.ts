import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobSubmissionComponent } from './job-submission/job-submission.component';
import { JobApplicationsComponent } from './job-applications/job-applications.component';
import { JobApplicationComponent } from './job-application/job-application.component';

@NgModule({
  declarations: [JobDetailsComponent, JobSubmissionComponent, JobApplicationsComponent, JobApplicationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
})
export class JobsModule { }
