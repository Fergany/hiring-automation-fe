import { Component, OnInit } from '@angular/core';
import { AssessmentSubmissionService } from './assessment-submission.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-assessment-submission',
  templateUrl: './assessment-submission.component.html',
  styleUrls: ['./assessment-submission.component.css']
})
export class AssessmentSubmissionComponent implements OnInit {
  assessmentSubmissionForm: FormGroup;
  assessment: {id: number, submittedAt: string, candidateFeedback: string};
  
  constructor(private assessmentSubmissionService: AssessmentSubmissionService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.assessment = {
        id: +params.get("id"),
        candidateFeedback: "",
        submittedAt: ""
      }
    });

    this.assessmentSubmissionForm = new FormGroup({
      candidateFeedback: new FormControl('', Validators.required)
    });
  }

  submitAssessment(){
    console.log(this.assessmentSubmissionForm.value.candidateFeedback);
    
    this.assessment.candidateFeedback = this.assessmentSubmissionForm.value.candidateFeedback;
    this.assessment.submittedAt = formatDate(new Date(), 'MM/dd/yyyy', 'en');
   this.assessmentSubmissionService.submitAssessment(this.assessment).subscribe(res => {
      console.log(res);
    });
  }

}
