import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobSubmissionComponent } from './job-submission/job-submission.component';
import { JobApplicationsComponent } from './job-applications/job-applications.component';

@NgModule({
  declarations: [JobDetailsComponent, JobSubmissionComponent, JobApplicationsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
})
export class JobsModule { }
