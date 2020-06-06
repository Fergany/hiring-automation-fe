import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobSubmissionComponent } from './job-submission/job-submission.component';

@NgModule({
  declarations: [JobDetailsComponent, JobSubmissionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
})
export class JobsModule { }
