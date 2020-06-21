import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobApplicationService } from './job-application.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

  jobApplicationId: string;
  jobApplication: any;
  isDataAvailable: boolean = false;

  constructor(private route: ActivatedRoute,
              private service: JobApplicationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobApplicationId = params.get("id");
      
    });

    this.service.getJobApplication(this.jobApplicationId).subscribe(jobApplication => {
      this.jobApplication = jobApplication;
      this.isDataAvailable = true;
      console.log(this.jobApplication);
      });
  }

  downloadFile(id){
    this.service.downloadFile(id).subscribe(response => {
			//let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
			//const url= window.URL.createObjectURL(blob);
      //window.open(url);
      console.log(response);
      debugger;
			window.location.href = response.url;
			//fileSaver.saveAs(blob, 'employees.json');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }


}
