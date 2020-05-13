import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
 })
export class JobDetailsService {

  constructor(private http: HttpClient){
  }

  getJob(jobId) {
    let headers = new HttpHeaders().set("content-type", "application/json;charset=UTF-8");
    return this.http.get("http://localhost:8080/jobs/" + jobId,  { headers: headers });
  }

}
