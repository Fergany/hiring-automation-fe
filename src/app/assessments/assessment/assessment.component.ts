import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from './assessment.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  jobSubmissionId: String;
  assessment;
  isDataAvailable = false;
  constructor(private route: ActivatedRoute, private assessmentService : AssessmentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobSubmissionId = params.get("id");
    });

    this.assessmentService.sendAssessment(this.jobSubmissionId).subscribe(assessment => {
      this.assessment = assessment;
      console.log(this.assessment);
      this.isDataAvailable = true;
    });
  }

}
