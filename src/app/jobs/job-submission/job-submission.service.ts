import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobSubmissionService {

  constructor(private http: HttpClient) { }

  submitJob(jobId) {
    let headers = new HttpHeaders().set("content-type", "application/json;charset=UTF-8");
    return this.http.post("http://localhost:8080/jobs/" + jobId + "/apply",  { headers: headers });
  }
}
