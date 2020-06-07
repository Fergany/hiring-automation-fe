import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobApplicationsService } from './job-applications.service';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {

  jobId: String;
  jobApplications: any;
  isDataAvailable:boolean = false;
  constructor(private service: JobApplicationsService, 
              private route: ActivatedRoute) {
   }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params =>
    this.jobId = params.get("id")
    );

    this.service.findAll(this.jobId).subscribe(jobApplications => {
        this.jobApplications = jobApplications;
        console.log(this.jobApplications);
        this.isDataAvailable = true;
      }
    );
  }

}
