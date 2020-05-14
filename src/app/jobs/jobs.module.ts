import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobDetailsService } from './job-details/job-details.service';


@NgModule({
  declarations: [JobDetailsComponent],
  imports: [
    CommonModule
  ],
  providers: [JobDetailsService]
})
export class JobsModule { }
