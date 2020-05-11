import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobApplyComponent } from './job-apply/job-apply.component';



@NgModule({
  declarations: [JobDetailsComponent, JobApplyComponent],
  imports: [
    CommonModule
  ]
})
export class JobsModule { }
