import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobDetailsService } from './job-details/job-details.service';
import { JobSubmissionComponent } from './job-submission/job-submission.component';


@NgModule({
  declarations: [JobDetailsComponent, JobSubmissionComponent],
  imports: [
    CommonModule
  ],
  providers: [JobDetailsService]
})
export class JobsModule { }
