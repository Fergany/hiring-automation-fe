import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http: HttpClient) { }

  sendAssessment(jobSubmissionId) {
    let headers = new HttpHeaders().set("content-type", "application/json;charset=UTF-8");
    return this.http.post("http://localhost:8080/assessments/jobSubmission/" + jobSubmissionId,  { headers: headers });
  }
}
