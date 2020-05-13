import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jobId: String;
  job: { title: string, description: string, requiredSkills: string };


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobId = params.get("id")
    });
    this.job = {
      title: "Software Engineer",
      description: `Design and implement our PaaS eCommerce backend in Scala as well as our core infrastructure components like database mappings and web service APIs for high availability e-commerce
      Analyse product requirements and discuss technical approaches
      Test software components regarding usability, functionality and performance and work closely with Product Management and DevOps
      Taking part in on-call rotation (with the worldwide distributed team) for production systems`,
      requiredSkills: `Bachelor's degree (or higher) in Computer Science and/or equivalent experience/qualification and at least 4 years experience as Software Engineer + applied work experience in Scala
      Fluent English for work in international teams
      Deep insights in functional programming and practical work experience with Scala and in developing server-side systems using the JVM
      Solid understanding of parallel and asynchronous programming as well as non-blocking I/O
      Experience in developing REST APIs and knowledge of scalable architectures (incl. sharding, replication, load balancing and fail over)
      Aspiration to constantly improve yourself and learn new technologies, concepts, etc.
      Great team player & nice colleague who enjoys our working & company culture`
    };
  }



}
