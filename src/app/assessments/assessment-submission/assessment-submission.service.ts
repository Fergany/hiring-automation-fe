import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssessmentSubmissionService {

  constructor(private http: HttpClient) { }

  submitAssessment(assessment){
    let headers = new HttpHeaders().set("content-type", "application/json;charset=UTF-8");
    return this.http.put("http://localhost:8080/assessments", assessment, { headers: headers });
  }
}
