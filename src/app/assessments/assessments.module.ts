import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentSubmissionComponent } from './assessment-submission/assessment-submission.component';



@NgModule({
  declarations: [AssessmentComponent, AssessmentSubmissionComponent],
  imports: [
    CommonModule
  ]
})
export class AssessmentsModule { }
