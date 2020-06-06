import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { JobSubmissionService } from './job-submission.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-job-submission',
  templateUrl: './job-submission.component.html',
  styleUrls: ['./job-submission.component.css'],
  providers: [JobSubmissionService]
})
export class JobSubmissionComponent implements OnInit {
  jobSubmissionForm: FormGroup;
  jobId: string;
  candidate: {firstName: string, lastName: string, phone: string, email: string, fileUploaded: {id: number}};

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private jobSubmissionService: JobSubmissionService) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobId = params.get("id")
    });
    this.jobSubmissionForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('' , Validators.required),//, Validators.pattern(/^[0-9A-Fa-f][0-9A-Fa-f](:[0-9A-Fa-f][0-9A-Fa-f]){5}$/)]),
      fileUploadedId: new FormControl('', Validators.required)
    });

  }

  submitJob() {
    console.log(this.jobSubmissionForm.value);
    this.candidate = {
      firstName: this.jobSubmissionForm.value.firstName, 
      lastName: this.jobSubmissionForm.value.lastName, 
      phone: this.jobSubmissionForm.value.phone, 
      email: this.jobSubmissionForm.value.email, 
      fileUploaded: {id: this.jobSubmissionForm.value.fileUploadedId}};
      this.jobSubmissionService.submitJob(this.jobId, this.candidate).subscribe(JobSubmission =>{
        console.log(JobSubmission);
        this.router.navigate(['/job', this.jobId]);
    });
  }
}
