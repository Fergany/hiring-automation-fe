import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { JobDetailsService } from "./job-details.service";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  providers:  [ JobDetailsService ]
})
export class JobDetailsComponent implements OnInit {

  jobId: String;
  job: any;// { id: number, title: string, description: string, requiredSkills: string };
  isDataAvailable:boolean = false;

  constructor(private route: ActivatedRoute, private service: JobDetailsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobId = params.get("id")
    });
    
    this.service.getJob(this.jobId).subscribe(job =>{
      console.log(job);
      this.job = job;
      this.isDataAvailable = true;
    });
  }

}
